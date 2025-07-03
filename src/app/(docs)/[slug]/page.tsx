
"use client";

import { useState, useEffect, useMemo } from 'react';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Pencil } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MarkdownPreview, getHeadings } from '@/components/markdown-preview';
import { useDocsLayout } from '@/context/docs-layout-context';
import { docPages } from '@/data/docs';
import { Button } from '@/components/ui/button';

export default function DocPage() {
  const params = useParams();
  const pathname = usePathname();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const { setHeadings, searchTerm } = useDocsLayout();
  
  const pageData = useMemo(() => {
    return docPages.find(p => p.slug === slug) || docPages[0];
  }, [slug]);

  const [isMounted, setIsMounted] = useState(false);
  const [content, setContent] = useState(pageData.defaultContent);
  const localStorageKey = `react-codex-content-${slug}`;

  useEffect(() => {
    setIsMounted(true);
    const updateContent = () => {
      try {
        const savedContent = localStorage.getItem(localStorageKey);
        if (savedContent) {
          setContent(savedContent);
        } else {
          setContent(pageData.defaultContent);
        }
      } catch (error) {
        console.error("Failed to access localStorage", error);
        setContent(pageData.defaultContent);
      }
    };

    updateContent();

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === localStorageKey) {
        updateContent();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);
  
  useEffect(() => {
    const headings = getHeadings(content);
    setHeadings(headings);
  }, [content, setHeadings]);

  if (!isMounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-background">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <main className="flex-1 flex flex-col overflow-hidden relative">
       <ScrollArea className="h-full">
          <div className="p-6">
            <MarkdownPreview content={content} searchTerm={searchTerm} />
          </div>
      </ScrollArea>
      <div className="absolute bottom-8 right-8">
        <Button asChild size="lg" className="rounded-full shadow-lg">
            <Link href={`${pathname}/edit`}>
                <Pencil className="mr-2 h-5 w-5" />
                Edit Page
            </Link>
        </Button>
      </div>
    </main>
  );
}
