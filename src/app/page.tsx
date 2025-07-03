"use client";

import { useState, useEffect, useMemo } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MarkdownPreview, getHeadings, type Heading } from '@/components/markdown-preview';
import { DynamicNavigation } from '@/components/dynamic-navigation';
import { MainHeader } from '@/components/main-header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const defaultContent = `# React Codex: Design System Docs

Welcome to React Codex, a live editor for your design system documentation. Start typing in the markdown editor to see the magic happen!

## Core Features

- **Content Editor**: Markdown-based documentation editor with live preview.
- **Dynamic Navigation**: Dynamic navigation generation based on document structure.
- **Code Snippet Highlighting**: Support for code snippets with syntax highlighting.
- **Real-time Search**: Quickly find relevant documentation sections.
- **Theme Switching**: Toggle between light and dark modes.

## React Code Example

\`\`\`jsx
import React from 'react';

const MyComponent = () => {
  return (
    <div className="p-4 bg-muted rounded-lg">
      <h1 className="text-2xl font-headline">Hello, World!</h1>
      <p>This is a React component.</p>
    </div>
  );
};

export default MyComponent;
\`\`\`

## CSS Code Example

\`\`\`css
body {
  font-family: 'Inter', sans-serif;
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
}

.title {
  font-family: 'Space Grotesk', sans-serif;
  color: hsl(var(--primary));
}
\`\`\`

### A Third-level Heading

You can even add multiple levels of headings.

#### And a fourth

You can use lists, **bold text**, \`inline code\`, and more.

- First item
- Second item
- Third item
`;

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [content, setContent] = useState(defaultContent);
  const [searchTerm, setSearchTerm] = useState('');

  // Load content from localStorage on mount
  useEffect(() => {
    setIsMounted(true);
    try {
      const savedContent = localStorage.getItem('react-codex-content');
      if (savedContent) {
        setContent(savedContent);
      }
    } catch (error) {
        console.error("Failed to access localStorage", error);
    }
  }, []);

  // Save content to localStorage on change
  useEffect(() => {
    if (isMounted) {
      try {
        localStorage.setItem('react-codex-content', content);
      } catch (error) {
        console.error("Failed to access localStorage", error);
      }
    }
  }, [content, isMounted]);

  const headings = useMemo(() => getHeadings(content), [content]);

  if (!isMounted) {
    return <div className="w-full h-screen flex items-center justify-center bg-background"><div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>;
  }

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-72 border-r bg-card">
        <DynamicNavigation headings={headings} />
      </aside>

      <div className="flex flex-1 flex-col max-h-screen overflow-hidden">
        <MainHeader 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
          headings={headings}
        />
        
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
      </div>
    </div>
  );
}
