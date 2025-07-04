
"use client";

import { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Pencil } from 'lucide-react';
import { MarkdownPreview, getHeadings } from '@/components/markdown-preview';
import { useDocsLayout } from '@/context/docs-layout-context';
import { Button } from '@/components/ui/button';

export default function DocPage() {
  const params = useParams();
  const pathname = usePathname();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const { pages, setHeadings, searchTerm, headings, setActiveHeadingId } = useDocsLayout();
  
  const pageData = useMemo(() => {
    return pages.find(p => p.slug === slug) || pages[0];
  }, [slug, pages]);

  const [isMounted, setIsMounted] = useState(false);
  const [content, setContent] = useState('');
  const localStorageKey = `react-codex-content-${slug}`;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

    if (pageData) {
      updateContent();
    }

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
  }, [slug, pageData?.defaultContent]);
  
  useEffect(() => {
    if (content) {
      const headings = getHeadings(content);
      setHeadings(headings);
    }
  }, [content, setHeadings]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || !headings.length) {
      setActiveHeadingId(null);
      return;
    }

    const handleScroll = () => {
      const headingElements = headings
        .map(h => document.getElementById(h.id))
        .filter((el): el is HTMLElement => el !== null);

      // Offset should be based on sticky header height
      const offset = 80; 
      let activeId = null;

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i];
        if (element.getBoundingClientRect().top <= offset) {
          activeId = element.id;
          break;
        }
      }
      setActiveHeadingId(activeId);
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [headings, setActiveHeadingId]);


  if (!isMounted || !pageData) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-background">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <main ref={scrollContainerRef} className="flex-1 overflow-y-auto">
      <div className="p-6 lg:px-8">
        <div className="prose dark:prose-invert mx-auto relative">
            <div className="absolute top-0 right-0 not-prose">
                <Button asChild size="sm" variant="ghost">
                    <Link href={`${pathname}/edit`}>
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit Page
                    </Link>
                </Button>
            </div>
            <MarkdownPreview content={content} searchTerm={searchTerm} />
        </div>
      </div>
    </main>
  );
}
