"use client";

import { Search, Menu } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DynamicNavigation } from '@/components/dynamic-navigation';
import type { Heading } from '@/components/markdown-preview';
import { useState } from 'react';

type MainHeaderProps = {
    searchTerm: string;
    onSearchChange: (term: string) => void;
    headings: Heading[];
};

export const MainHeader = ({ searchTerm, onSearchChange, headings }: MainHeaderProps) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <header className="flex h-14 items-center gap-4 border-b bg-card px-4 lg:h-[60px] lg:px-6 sticky top-0 z-20">
           <Sheet open={isNavOpen} onOpenChange={setIsNavOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-72 bg-card">
                <DynamicNavigation headings={headings} onLinkClick={() => setIsNavOpen(false)} />
            </SheetContent>
          </Sheet>

          <a href="/" className="font-headline text-xl font-bold mr-4 shrink-0">
            React Codex
          </a>
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
