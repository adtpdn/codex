
'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { useParams } from 'next/navigation';
import { Textarea } from '@/components/ui/textarea';
import { MarkdownToolbar } from '@/components/markdown-toolbar';
import { useDocsLayout } from '@/context/docs-layout-context';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function EditDocPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const { setHeadings, pages, updatePageIcon } = useDocsLayout();

  const pageData = useMemo(() => {
    return pages.find(p => p.slug === slug) || pages[0];
  }, [slug, pages]);

  const [isMounted, setIsMounted] = useState(false);
  const [content, setContent] = useState('');
  const localStorageKey = `react-codex-content-${slug}`;
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Clear headings on edit page
    setHeadings([]);
  }, [setHeadings]);

  useEffect(() => {
    setIsMounted(true);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, pageData.defaultContent]);

  useEffect(() => {
    if (isMounted) {
      try {
        localStorage.setItem(localStorageKey, content);
      } catch (error) {
        console.error("Failed to save to localStorage", error);
      }
    }
  }, [content, isMounted, localStorageKey]);
  
  const handleIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (slug) {
        updatePageIcon(slug, e.target.value);
    }
  };

  if (!isMounted || !pageData) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-background">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <main className="flex-1 flex flex-col overflow-hidden bg-card">
        <div className="p-4 border-b bg-card space-y-2">
            <Label htmlFor="page-icon" className="text-xs font-semibold text-muted-foreground">PAGE ICON</Label>
            <Input
                id="page-icon"
                value={pageData.icon}
                onChange={handleIconChange}
                className="w-16 h-16 text-4xl text-center p-0 border-dashed"
                maxLength={2}
            />
        </div>
        <MarkdownToolbar textareaRef={textareaRef} onContentChange={setContent} />
        <Textarea
            ref={textareaRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Type your markdown here..."
            className="flex-1 w-full resize-none border-0 rounded-none focus-visible:ring-0 p-6 text-base font-code leading-relaxed"
            aria-label="Markdown Editor"
        />
    </main>
  );
}
