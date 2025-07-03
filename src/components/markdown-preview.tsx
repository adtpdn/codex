"use client";

import React, { useMemo } from 'react';
import { slugify } from '@/lib/utils';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ColorPalette } from '@/components/color-palette';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { TypographyShowcase } from './typography-showcase';
import { IconographyShowcase } from './iconography-showcase';


export type Heading = {
  id: string;
  level: number;
  text: string;
};

const SimpleMarkdownParser = ({ content, searchTerm }: { content: string, searchTerm: string }) => {
  return useMemo(() => {
    const highlight = (text: string): React.ReactNode[] => {
        if (!searchTerm || typeof text !== 'string') return [text];
        const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        return text.split(regex).map((part, i) =>
          i % 2 === 1 ? <mark key={i} className="bg-accent/30 text-accent-foreground rounded-sm px-1">{part}</mark> : part
        );
    };

    const parseInline = (text: string): React.ReactNode[] => {
        const tokenizer = /(\*\*(?:[^*]|\*[^*])*\*\*|\*(?:[^*]|\*[^*])*\*|~~(?:[^~]|~[^~])*~~|`[^`]+`|!\[[^\]]*\]\([^)]+\)|\[[^\]]+\]\([^)]+\))/g;

        const elements: React.ReactNode[] = [];
        let lastIndex = 0;
        let match;

        while ((match = tokenizer.exec(text)) !== null) {
            if (match.index > lastIndex) {
                elements.push(...highlight(text.substring(lastIndex, match.index)));
            }
            
            const token = match[0];
            
            if (token.startsWith('**') && token.endsWith('**')) {
                elements.push(<strong key={lastIndex}>{parseInline(token.slice(2, -2))}</strong>);
            } else if (token.startsWith('*') && token.endsWith('*')) {
                elements.push(<em key={lastIndex}>{parseInline(token.slice(1, -1))}</em>);
            } else if (token.startsWith('~~') && token.endsWith('~~')) {
                elements.push(<s key={lastIndex}>{parseInline(token.slice(2, -2))}</s>);
            } else if (token.startsWith('`') && token.endsWith('`')) {
                elements.push(<code key={lastIndex} className="font-code bg-muted text-accent px-1.5 py-1 rounded-sm text-sm">{token.slice(1, -1)}</code>);
            } else if (token.startsWith('![')) {
                const altMatch = token.match(/!\[(.*?)\]/);
                const srcMatch = token.match(/\((.*?)\)/);
                const alt = altMatch ? altMatch[1] : '';
                const src = srcMatch ? srcMatch[1] : '';
                elements.push(<span key={lastIndex} className="block my-4"><Image data-ai-hint="image" src={src} alt={alt || ''} width={600} height={400} className="rounded-lg mx-auto" /></span>);
            } else if (token.startsWith('[')) {
                const textMatch = token.match(/\[(.*?)\]/);
                const hrefMatch = token.match(/\((.*?)\)/);
                const linkText = textMatch ? textMatch[1] : '';
                const href = hrefMatch ? hrefMatch[1] : '';
                elements.push(<a key={lastIndex} href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{parseInline(linkText)}</a>);
            }
            
            lastIndex = tokenizer.lastIndex;
        }

        if (lastIndex < text.length) {
            elements.push(...highlight(text.substring(lastIndex)));
        }

        return elements;
    };
    
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      if (line.trim() === '') {
        i++;
        continue;
      }

      // Headings
      const headingMatch = line.match(/^(#+)\s+(.*)/);
      if (headingMatch) {
        const level = headingMatch[1].length;
        const text = headingMatch[2];
        const id = slugify(text);
        const Tag = `h${level > 6 ? 6 : level}` as keyof JSX.IntrinsicElements;
        const sizeClasses = ['text-4xl', 'text-3xl', 'text-2xl', 'text-xl', 'text-lg', 'text-base'][level - 1] || 'text-base';
        elements.push(<Tag key={i} id={id} className={cn('font-headline font-bold mt-8 mb-4 pb-2 border-b', sizeClasses)}>{parseInline(text)}</Tag>);
        i++;
        continue;
      }

      // Horizontal Rule
      if (line.match(/^(?:---|___|\*\*\*)$/)) {
        elements.push(<hr key={i} className="my-8" />);
        i++;
        continue;
      }

      // Code Blocks
      if (line.startsWith('```')) {
        const codeLang = line.substring(3).trim();
        let codeContent: string[] = [];
        i++;
        while (i < lines.length && !lines[i].startsWith('```')) {
          codeContent.push(lines[i]);
          i++;
        }

        if (codeLang === 'palette') {
          try {
            const colors = JSON.parse(codeContent.join('\n'));
            elements.push(<ColorPalette key={i} colors={colors} />);
          } catch (e) {
            elements.push(
              <Alert variant="destructive" key={i} className="my-6">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Invalid Color Palette</AlertTitle>
                <AlertDescription>
                  There was an error parsing the JSON for the color palette. Please check the format.
                </AlertDescription>
              </Alert>
            );
          }
        } else if (codeLang === 'typography') {
          try {
            const styles = JSON.parse(codeContent.join('\n'));
            elements.push(<TypographyShowcase key={i} styles={styles} />);
          } catch (e) {
            elements.push(
              <Alert variant="destructive" key={i} className="my-6">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Invalid Typography Showcase</AlertTitle>
                <AlertDescription>
                  There was an error parsing the JSON for the typography showcase. Please check the format.
                </AlertDescription>
              </Alert>
            );
          }
        } else if (codeLang === 'iconography') {
          try {
            const icons = JSON.parse(codeContent.join('\n'));
            elements.push(<IconographyShowcase key={i} icons={icons} />);
          } catch (e) {
            elements.push(
              <Alert variant="destructive" key={i} className="my-6">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Invalid Iconography Showcase</AlertTitle>
                <AlertDescription>
                  There was an error parsing the JSON for the iconography showcase. Please check the format.
                </AlertDescription>
              </Alert>
            );
          }
        } else {
            elements.push(
              <pre key={i} className="bg-muted dark:bg-black/50 rounded-lg my-6 font-code">
                <div className="text-xs text-muted-foreground px-4 py-2 border-b border-border">{codeLang || 'code'}</div>
                <code className={cn('block p-4 text-sm overflow-x-auto', `language-${codeLang}`)}>{codeContent.join('\n')}</code>
              </pre>
            );
        }
        i++;
        continue;
      }
      
      // Blockquotes
      if (line.startsWith('>')) {
        let quoteLines: string[] = [];
        while (i < lines.length && lines[i].startsWith('>')) {
          quoteLines.push(lines[i].substring(2));
          i++;
        }
        elements.push(
          <blockquote key={i} className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">
            {quoteLines.map((qline, qidx) => <p className="mb-2 last:mb-0" key={qidx}>{parseInline(qline)}</p>)}
          </blockquote>
        );
        continue;
      }

      // Unordered Lists
      if (line.match(/^(\s*)- /)) {
        let listItems: {content: string, indent: number}[] = [];
        while (i < lines.length && lines[i].match(/^(\s*)- /)) {
            const match = lines[i].match(/^(\s*)- /)!;
            const indent = match[1].length;
            listItems.push({ content: lines[i].substring(match[0].length), indent });
            i++;
        }
        
        const buildList = (items: typeof listItems, level = 0): React.ReactElement => {
            const listNodes: React.ReactNode[] = [];
            let currentItemChildren: typeof listItems = [];
            let processedIndices = new Set<number>();

            for(let j=0; j<items.length; j++) {
                if (processedIndices.has(j)) continue;

                const item = items[j];
                if (item.indent / 2 === level) {
                    currentItemChildren = [];
                    for(let k=j+1; k<items.length; k++) {
                        if (items[k].indent / 2 > level) {
                            currentItemChildren.push(items[k]);
                            processedIndices.add(k);
                        } else {
                            break;
                        }
                    }
                    
                    const childrenList = currentItemChildren.length > 0 ? buildList(currentItemChildren, level + 1) : null;
                    listNodes.push(<li key={j}>{parseInline(item.content)}{childrenList}</li>)
                }
            }
            return <ul key={level} className="list-disc pl-6 my-4 space-y-2">{listNodes}</ul>;
        }

        elements.push(React.cloneElement(buildList(listItems), { key: i }));
        continue;
      }

      // Tables
      if (line.includes('|') && i + 1 < lines.length && lines[i + 1].includes('|') && lines[i+1].includes('-')) {
        const headerLine = line;
        const separatorLine = lines[i+1];
        if (separatorLine.match(/^ *\|? *[:-]-+[:-] *\|?(?: *[:-]-+[:-] *\|?)* *$/)) {
            const headers = headerLine.split('|').map(s => s.trim()).filter(h => h.length > 0);
            let bodyRows: string[][] = [];
            i += 2;
            while(i < lines.length && lines[i].includes('|')) {
                const row = lines[i].split('|').map(s => s.trim());
                 if (row[0] === '') row.shift();
                if (row[row.length-1] === '') row.pop();
                if(row.length > 0 && !(row.length === 1 && row[0] === '')) {
                  bodyRows.push(row);
                }
                i++;
            }

            elements.push(
                <Table key={i} className="my-6">
                    <TableHeader>
                        <TableRow>
                            {headers.map((h, hIdx) => <TableHead key={hIdx}>{parseInline(h)}</TableHead>)}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {bodyRows.map((row, rIdx) => (
                            <TableRow key={rIdx}>
                                {row.map((cell, cIdx) => <TableCell key={cIdx}>{parseInline(cell)}</TableCell>)}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            );
            continue;
        }
      }

      // Paragraphs
      let paraLines = [line];
      i++;
      while (i < lines.length && lines[i].trim() !== '' && !/^(#|>|- |```|\|.*\||---|___|\*\*\*)/.test(lines[i])) {
        paraLines.push(lines[i]);
        i++;
      }
      elements.push(<p key={i-1} className="my-4 leading-relaxed">{parseInline(paraLines.join(' '))}</p>);
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
