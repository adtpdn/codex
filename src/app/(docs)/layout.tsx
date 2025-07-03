
'use client';

import * as React from 'react';
import { SidebarProvider, Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarSeparator, SidebarInset, useSidebar } from '@/components/ui/sidebar';
import { MainHeader } from '@/components/main-header';
import { DocsLayoutProvider, useDocsLayout } from '@/context/docs-layout-context';
import { docPages } from '@/data/docs';
import { DynamicNavigation } from '@/components/dynamic-navigation';
import { usePathname } from 'next/navigation';
import { Book, Newspaper } from 'lucide-react';

function DocsLayoutInner({ children }: { children: React.ReactNode }) {
    const { headings, searchTerm, setSearchTerm } = useDocsLayout();
    const { setOpenMobile, open: sidebarOpen } = useSidebar();
    const pathname = usePathname();

    const handleLinkClick = () => {
        setOpenMobile(false);
    }

    return (
        <div className="bg-background text-foreground">
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
                            {docPages.map((page) => (
                                <SidebarMenuItem key={page.slug}>
                                    <SidebarMenuButton asChild isActive={pathname === `/${page.slug}`} tooltip={{children: page.title, hidden: sidebarOpen}}>
                                        <a href={`/${page.slug}`}>
                                            <Newspaper size={16} />
                                            <span>{page.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                        <SidebarSeparator />
                         <div className="flex-1 px-0 overflow-y-auto">
                             <DynamicNavigation headings={headings} onLinkClick={handleLinkClick} />
                         </div>
                    </SidebarContent>
                </Sidebar>
                <SidebarInset>
                    <div className="flex flex-col h-screen">
                      <MainHeader searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                      {children}
                    </div>
                </SidebarInset>
        </div>
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
