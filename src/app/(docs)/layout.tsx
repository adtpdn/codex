
'use client';

import * as React from 'react';
import { SidebarProvider, Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, useSidebar } from '@/components/ui/sidebar';
import { MainHeader } from '@/components/main-header';
import { DocsLayoutProvider, useDocsLayout } from '@/context/docs-layout-context';
import { DynamicNavigation } from '@/components/dynamic-navigation';
import { usePathname } from 'next/navigation';
import type { DocPage } from '@/data/docs';
import LucideIcon from '@/components/lucide-icon';

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

    const groupedPages = React.useMemo(() => {
        const pageOrder: Record<string, DocPage[]> = {
            'Introduction': [],
            'General': [],
            'Layout': [],
            'Navigation': [],
            'Feedback': [],
        };

        filteredDocPages.forEach(page => {
            if (pageOrder[page.group]) {
                pageOrder[page.group].push(page);
            }
        });

        return pageOrder;
    }, [filteredDocPages]);


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
                    {Object.entries(groupedPages).map(([group, pages]) => {
                        if (pages.length === 0) return null;
                        return (
                            <SidebarGroup key={group} className="p-2 pt-0">
                                <SidebarGroupLabel>{group}</SidebarGroupLabel>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {pages.map((page) => (
                                            <SidebarMenuItem key={page.slug}>
                                                <SidebarMenuButton asChild isActive={pathname.startsWith(`/${page.slug}`)} tooltip={{children: page.title, hidden: sidebarOpen}}>
                                                    <a href={`/${page.slug}`}>
                                                        <LucideIcon name={page.icon} className="w-4 h-4" />
                                                        <span>{page.title}</span>
                                                    </a>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        ))}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </SidebarGroup>
                        )
                    })}
                    
                    {filteredDocPages.length === 0 ? (
                         <SidebarMenuItem>
                            <div className="px-2 py-1.5 text-sm text-muted-foreground">
                                <span className="group-data-[collapsible=icon]:hidden">No pages found.</span>
                            </div>
                        </SidebarMenuItem>
                    ) : null}
                </SidebarContent>
            </Sidebar>
            <main className="relative flex flex-1 flex-col bg-background peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow">
                <MainHeader searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                <div className="flex-1 flex overflow-hidden">
                    {children}
                    {!isEditPage && (
                        <aside className="hidden lg:block w-60 flex-shrink-0 border-l">
                            <div className="sticky top-16 h-[calc(100vh-4rem)]">
                                <DynamicNavigation headings={headings} onLinkClick={handleLinkClick} />
                            </div>
                        </aside>
                    )}
                </div>
            </main>
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
