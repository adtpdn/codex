
'use client';

import * as React from 'react';
import { SidebarProvider, Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarSeparator, SidebarInset, useSidebar } from '@/components/ui/sidebar';
import { MainHeader } from '@/components/main-header';
import { DocsLayoutProvider, useDocsLayout } from '@/context/docs-layout-context';
import { DynamicNavigation } from '@/components/dynamic-navigation';
import { usePathname } from 'next/navigation';
import { Book } from 'lucide-react';

function DocsLayoutInner({ children }: { children: React.ReactNode }) {
    const { pages, headings, searchTerm, setSearchTerm } = useDocsLayout();
    const { setOpenMobile, open: sidebarOpen } = useSidebar();
    const pathname = usePathname();
    const isEditPage = pathname.endsWith('/edit');

    const handleLinkClick = () => {
        setOpenMobile(false);
    }

    const filteredDocPages = React.useMemo(() => {
        if (!searchTerm.trim()) {
            return pages;
        }
        const lowercasedFilter = searchTerm.toLowerCase();
        
        return pages.filter(page => {
            const localStorageKey = `react-codex-content-${page.slug}`;
            let content = page.defaultContent;
            
            try {
                if (typeof window !== 'undefined') {
                    const savedContent = localStorage.getItem(localStorageKey);
                    if (savedContent) {
                        content = savedContent;
                    }
                }
            } catch (error) {
                console.error("Failed to access localStorage during search", error);
            }

            return page.title.toLowerCase().includes(lowercasedFilter) ||
                   content.toLowerCase().includes(lowercasedFilter);
        });
    }, [searchTerm, pages]);

    return (
        <>
            <Sidebar>
                <SidebarContent>
                     <div className="p-2">
                         <a href="/" className="font-headline text-xl font-bold block group-data-[collapsible=icon]:hidden">
                            React Codex
                         </a>
                         <a href="/" className="font-headline text-xl font-bold hidden group-data-[collapsible=icon]:block text-center">
                            RC
                         </a>
                     </div>
                    <SidebarMenu>
                         <div className="px-2 pb-2 text-xs font-semibold text-muted-foreground flex items-center group-data-[collapsible=icon]:justify-center">
                            <Book size={14} className="mr-2 group-data-[collapsible=icon]:mr-0"/>
                            <span className="group-data-[collapsible=icon]:hidden">Pages</span>
                        </div>
                        {filteredDocPages.length > 0 ? (
                            filteredDocPages.map((page) => (
                                <SidebarMenuItem key={page.slug}>
                                    <SidebarMenuButton asChild isActive={pathname.startsWith(`/${page.slug}`)} tooltip={{children: page.title, hidden: sidebarOpen}}>
                                        <a href={`/${page.slug}`}>
                                            <span className="w-4 h-4 flex items-center justify-center text-base">{page.icon}</span>
                                            <span>{page.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))
                        ) : (
                             <SidebarMenuItem>
                                <div className="px-2 py-1.5 text-sm text-muted-foreground">
                                    <span className="group-data-[collapsible=icon]:hidden">No pages found.</span>
                                </div>
                            </SidebarMenuItem>
                        )}
                    </SidebarMenu>
                    <SidebarSeparator />
                     <div className="flex-1 px-0 overflow-y-auto">
                        {!isEditPage && <DynamicNavigation headings={headings} onLinkClick={handleLinkClick} />}
                     </div>
                </SidebarContent>
            </Sidebar>
            <SidebarInset>
                <MainHeader searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                {children}
            </SidebarInset>
        </>
    );
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <DocsLayoutProvider>
                <DocsLayoutInner>{children}</DocsLayoutInner>
            </DocsLayoutProvider>
        </SidebarProvider>
    );
}
