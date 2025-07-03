
"use client";

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { ThemeToggle } from '@/components/theme-toggle';
import { SidebarTrigger } from '@/components/ui/sidebar';

type MainHeaderProps = {
    searchTerm: string;
    onSearchChange: (term: string) => void;
};

export const MainHeader = ({ searchTerm, onSearchChange }: MainHeaderProps) => {
    return (
        <header className="flex h-14 items-center gap-4 border-b bg-card px-4 lg:h-[60px] lg:px-6 sticky top-0 z-20 shrink-0">
           <SidebarTrigger className="md:hidden" />
          
          <div className="flex-1">
            <div className="relative ml-auto max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search documentation..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                aria-label="Search documentation"
              />
            </div>
          </div>
          <ThemeToggle />
        </header>
    );
};
