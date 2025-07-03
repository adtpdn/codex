"use client";

import React, { useMemo } from 'react';
import { slugify } from '@/lib/utils';
import { cn } from '@/lib/utils';

export type Heading = {
  id: string;
  level: number;
  text: string;
};

const SimpleMarkdownParser = ({ content, searchTerm }: { content: string, searchTerm: string }) => {
  return useMemo(() => {
    const highlight = (text: string) => {
      if (!searchTerm || typeof text !== 'string') return text;
      const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      return text.split(regex).map((part, i) =>
        part.toLowerCase() === searchTerm.toLowerCase() ? <mark key={i} className="bg-accent/30 text-accent-foreground rounded-sm px-1">{part}</mark> : part
      );
    };

    const lines = content.split('\n');
    let inCodeBlock = false;
    let codeLang = '';
    let codeContent: string[] = [];
    const elements: React.ReactNode[] = [];
    let listItems: React.ReactNode[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(<ul key={`ul-${elements.length}`} className="list-disc pl-6 my-4 space-y-2">{listItems}</ul>);
        listItems = [];
      }
    };

    lines.forEach((line, i) => {
      if (line.startsWith('```')) {
        flushList();
        if (inCodeBlock) {
          elements.push(
            <pre key={`code-${i}`} className="bg-muted dark:bg-black/50 rounded-lg my-6 font-code">
              <div className="text-xs text-muted-foreground px-4 py-2 border-b border-border">{codeLang || 'code'}</div>
              <code className={cn('block p-4 text-sm overflow-x-auto', `language-${codeLang}`)}>
                {codeContent.join('\n')}
              </code>
            </pre>
          );
          inCodeBlock = false;
          codeContent = [];
          codeLang = '';
        } else {
          inCodeBlock = true;
          codeLang = line.substring(3).trim();
        }
        return;
      }

      if (inCodeBlock) {
        codeContent.push(line);
        return;
      }
      
      const headingMatch = line.match(/^(#+)\s+(.*)/);
      if (headingMatch) {
        flushList();
        const level = headingMatch[1].length;
        const text = headingMatch[2];
        const id = slugify(text);
        const Tag = `h${level > 6 ? 6 : level}` as keyof JSX.IntrinsicElements;
        const sizeClasses = ['text-4xl', 'text-3xl', 'text-2xl', 'text-xl', 'text-lg', 'text-base'][level - 1] || 'text-base';
        elements.push(
            <Tag key={id} id={id} className={cn('font-headline font-bold mt-8 mb-4 pb-2 border-b', sizeClasses)}>
                {highlight(text)}
            </Tag>
        );
        return;
      }
      
      if (line.startsWith('- ')) {
        const text = line.substring(2);
        listItems.push(<li key={i}>{highlight(text)}</li>);
        return;
      }

      flushList();
      if (line.trim() !== '') {
        const parts = line.split(/(`[^`]+`|\*\*.*?\*\*)/g);
        elements.push(
          <p key={i} className="my-4 leading-relaxed">
            {parts.map((part, index) => {
              if (part.startsWith('`') && part.endsWith('`')) {
                return <code key={index} className="font-code bg-muted text-accent px-1.5 py-1 rounded-sm text-sm">{part.slice(1, -1)}</code>;
              }
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={index}>{highlight(part.slice(2, -2))}</strong>;
              }
              return highlight(part);
            })}
          </p>
        );
      }
    });

    flushList();
    if(inCodeBlock) {
        elements.push(
            <pre key={`code-end`} className="bg-muted dark:bg-black/50 rounded-lg my-6 font-code">
              <div className="text-xs text-muted-foreground px-4 py-2 border-b border-border">{codeLang || 'code'}</div>
              <code className={cn('block p-4 text-sm overflow-x-auto', `language-${codeLang}`)}>
                {codeContent.join('\n')}
              </code>
            </pre>
          );
    }


    return <>{elements}</>;
  }, [content, searchTerm]);
};

export const MarkdownPreview = ({ content, searchTerm }: { content: string, searchTerm: string }) => {
  return (
    <div className="prose dark:prose-invert max-w-none">
        <SimpleMarkdownParser content={content} searchTerm={searchTerm} />
    </div>
  );
};

export const getHeadings = (content: string): Heading[] => {
    return content
      .split('\n')
      .map((line) => {
        const headingMatch = line.match(/^(#+)\s+(.*)/);
        if (!headingMatch) return null;
        const level = headingMatch[1].length;
        const text = headingMatch[2];
        return {
          id: slugify(text),
          level,
          text,
        };
      })
      .filter((h): h is Heading => h !== null);
}
