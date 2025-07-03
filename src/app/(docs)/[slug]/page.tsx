
"use client";

import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'next/navigation';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MarkdownPreview, getHeadings } from '@/components/markdown-preview';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useDocsLayout } from '@/context/docs-layout-context';
import { docPages } from '@/data/docs';

export default function DocPage() {
  const params = useParams();
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
  }, [slug]);

  useEffect(() => {
    if (isMounted) {
      try {
        localStorage.setItem(localStorageKey, content);
      } catch (error) {
        console.error("Failed to access localStorage", error);
      }
    }
  }, [content, isMounted, localStorageKey]);
  
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
    <main className="flex-1 flex flex-col overflow-hidden">
      <Tabs defaultValue="editor" className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-shrink-0 bg-card border-b">
          <TabsList className="grid w-full grid-cols-2 h-auto p-0 bg-transparent rounded-none">
            <TabsTrigger value="editor" className="py-3 font-semibold rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent border-b-2 data-[state=active]:border-primary border-transparent -mb-px">
              Editor
            </TabsTrigger>
            <TabsTrigger value="preview" className="py-3 font-semibold rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent border-b-2 data-[state=active]:border-primary border-transparent -mb-px">
              Preview
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="editor" className="flex-1 bg-card mt-0 overflow-y-auto">
          <div className="relative h-full">
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Type your markdown here..."
                className="absolute inset-0 h-full w-full resize-none border-0 rounded-none focus-visible:ring-0 p-6 text-base font-code leading-relaxed"
                aria-label="Markdown Editor"
              />
          </div>
        </TabsContent>
        
        <TabsContent value="preview" className="flex-1 bg-background mt-0 overflow-y-auto">
           <ScrollArea className="h-full">
              <div className="p-6">
                <MarkdownPreview content={content} searchTerm={searchTerm} />
              </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </main>
  );
}
