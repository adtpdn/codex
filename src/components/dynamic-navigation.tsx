
"use client";

import { cn } from '@/lib/utils';
import type { Heading } from '@/components/markdown-preview';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useDocsLayout } from '@/context/docs-layout-context';
import React, { useEffect, useRef } from 'react';

export const DynamicNavigation = ({ headings, onLinkClick }: { headings: Heading[], onLinkClick?: () => void }) => {
  const { activeHeadingId } = useDocsLayout();
  const activeLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    activeLinkRef.current?.scrollIntoView({
      block: 'nearest'
    });
  }, [activeHeadingId]);

  return (
    <ScrollArea className="h-full">
      <nav className="py-6">
        <h3 className="font-headline text-sm font-semibold uppercase text-muted-foreground mb-4 px-4">On this page</h3>
        <ul className="space-y-1">
          {headings.map((heading) => {
            const isActive = heading.id === activeHeadingId;
            return (
              <li key={heading.id}>
                <a
                  ref={isActive ? activeLinkRef : null}
                  href={`#${heading.id}`}
                  onClick={onLinkClick}
                  className={cn(
                    'block text-sm py-1.5 px-4 transition-colors rounded-md text-muted-foreground hover:bg-accent/10 hover:text-primary',
                    isActive && 'text-primary font-semibold bg-accent/10',
                    heading.level === 2 && 'pl-7',
                    heading.level === 3 && 'pl-10',
                    heading.level > 3 && 'pl-12'
                  )}
                >
                  {heading.text}
                </a>
              </li>
            );
          })}
          {headings.length === 0 && <p className="px-4 text-sm text-muted-foreground">No sections found.</p>}
        </ul>
      </nav>
    </ScrollArea>
  );
};
