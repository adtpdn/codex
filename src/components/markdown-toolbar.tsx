
"use client";

import React from 'react';
import { Bold, Italic, Strikethrough, Heading1, Heading2, Heading3, Link as LinkIcon, Quote, Code, List, Palette, Type, Shapes } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

type MarkdownToolbarProps = {
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  onContentChange: (newContent: string) => void;
};

const applyMarkdown = (
  textarea: HTMLTextAreaElement,
  onContentChange: (newContent: string) => void,
  { prefix, suffix = '', placeholder = 'text', multiline = false } : { prefix: string, suffix?: string, placeholder?: string, multiline?: boolean }
) => {
  if (!textarea) return;

  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const selectedText = textarea.value.substring(start, end);
  const textToInsert = selectedText || placeholder;

  let newText;
  if(multiline && selectedText) {
    const lines = selectedText.split('\n');
    const transformedLines = lines.map(line => `${prefix}${line}`).join('\n');
    newText = textarea.value.substring(0, start) + transformedLines + textarea.value.substring(end);
  } else {
    newText = `${textarea.value.substring(0, start)}${prefix}${textToInsert}${suffix}${textarea.value.substring(end)}`;
  }
  
  onContentChange(newText);

  textarea.focus();
  const newCursorPos = start + prefix.length;
  setTimeout(() => textarea.setSelectionRange(newCursorPos, newCursorPos + textToInsert.length), 0);
};

export const MarkdownToolbar: React.FC<MarkdownToolbarProps> = ({ textareaRef, onContentChange }) => {
    const handleAction = (params: { prefix: string, suffix?: string, placeholder?: string, multiline?: boolean }) => {
        if(textareaRef.current) {
            applyMarkdown(textareaRef.current, onContentChange, params);
        }
    };
    
    const handlePaletteInsert = () => {
        const textarea = textareaRef.current;
        if (!textarea) return;
        
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        
        const paletteBlock = `
\`\`\`palette
[
  { "name": "Primary", "hex": "#60a5fa" },
  { "name": "Secondary", "hex": "#93c5fd" },
  { "name": "Accent", "hex": "#facc15" }
]
\`\`\`
`;
        
        const textBefore = textarea.value.substring(0, start);
        const leadingNewlines = (start > 0 && textBefore[textBefore.length - 1] !== '\n') ? '\n\n' : '\n';
        const textToInsert = leadingNewlines + paletteBlock.trim() + '\n';
        
        const newText = textarea.value.substring(0, start) + textToInsert + textarea.value.substring(end);
        onContentChange(newText);

        textarea.focus();
        const newCursorPos = start + textToInsert.length;
        setTimeout(() => textarea.setSelectionRange(newCursorPos, newCursorPos), 0);
    };

    const handleTypographyInsert = () => {
        const textarea = textareaRef.current;
        if (!textarea) return;
        
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        
        const typographyBlock = `
\`\`\`typography
[
  { "tag": "h1", "name": "Heading 1", "fontSize": "3rem", "fontWeight": 700, "fontFamily": "headline" },
  { "tag": "h2", "name": "Heading 2", "fontSize": "2.25rem", "fontWeight": 700, "fontFamily": "headline" },
  { "tag": "p", "name": "Body Text", "fontSize": "1rem", "fontWeight": 400, "fontFamily": "body" }
]
\`\`\`
`;
        
        const textBefore = textarea.value.substring(0, start);
        const leadingNewlines = (start > 0 && textBefore[textBefore.length - 1] !== '\n') ? '\n\n' : '\n';
        const textToInsert = leadingNewlines + typographyBlock.trim() + '\n';
        
        const newText = textarea.value.substring(0, start) + textToInsert + textarea.value.substring(end);
        onContentChange(newText);

        textarea.focus();
        const newCursorPos = start + textToInsert.length;
        setTimeout(() => textarea.setSelectionRange(newCursorPos, newCursorPos), 0);
    };

    const handleIconographyInsert = () => {
        const textarea = textareaRef.current;
        if (!textarea) return;
        
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        
        const iconographyBlock = `
\`\`\`iconography
[
  { "name": "Bell", "sizes": [16, 24, 32, 48] },
  { "name": "Heart", "sizes": [16, 24, 32, 48] },
  { "name": "Star", "sizes": [16, 24, 32, 48] }
]
\`\`\`
`;
        
        const textBefore = textarea.value.substring(0, start);
        const leadingNewlines = (start > 0 && textBefore[textBefore.length - 1] !== '\n') ? '\n\n' : '\n';
        const textToInsert = leadingNewlines + iconographyBlock.trim() + '\n';
        
        const newText = textarea.value.substring(0, start) + textToInsert + textarea.value.substring(end);
        onContentChange(newText);

        textarea.focus();
        const newCursorPos = start + textToInsert.length;
        setTimeout(() => textarea.setSelectionRange(newCursorPos, newCursorPos), 0);
    };
    
    return (
        <div className="flex flex-wrap items-center gap-1 p-2 border-b bg-card">
            <Button variant="ghost" size="icon" onClick={() => handleAction({ prefix: '# ', placeholder: 'Heading' })} title="Heading 1"><Heading1 className="w-4 h-4" /></Button>
            <Button variant="ghost" size="icon" onClick={() => handleAction({ prefix: '## ', placeholder: 'Heading' })} title="Heading 2"><Heading2 className="w-4 h-4" /></Button>
            <Button variant="ghost" size="icon" onClick={() => handleAction({ prefix: '### ', placeholder: 'Heading' })} title="Heading 3"><Heading3 className="w-4 h-4" /></Button>
            <Separator orientation="vertical" className="h-6 mx-1" />
            <Button variant="ghost" size="icon" onClick={() => handleAction({ prefix: '**', suffix: '**', placeholder: 'bold' })} title="Bold"><Bold className="w-4 h-4" /></Button>
            <Button variant="ghost" size="icon" onClick={() => handleAction({ prefix: '*', suffix: '*', placeholder: 'italic' })} title="Italic"><Italic className="w-4 h-4" /></Button>
            <Button variant="ghost" size="icon" onClick={() => handleAction({ prefix: '~~', suffix: '~~', placeholder: 'strikethrough' })} title="Strikethrough"><Strikethrough className="w-4 h-4" /></Button>
            <Separator orientation="vertical" className="h-6 mx-1" />
            <Button variant="ghost" size="icon" onClick={() => handleAction({ prefix: '[', suffix: '](url)', placeholder: 'link text' })} title="Link"><LinkIcon className="w-4 h-4" /></Button>
            <Button variant="ghost" size="icon" onClick={() => handleAction({ prefix: '> ', placeholder: 'quote', multiline: true })} title="Blockquote"><Quote className="w-4 h-4" /></Button>
            <Button variant="ghost" size="icon" onClick={() => handleAction({ prefix: '`', suffix: '`', placeholder: 'code' })} title="Inline Code"><Code className="w-4 h-4" /></Button>
            <Button variant="ghost" size="icon" onClick={() => handleAction({ prefix: '- ', placeholder: 'List item', multiline: true })} title="Unordered List"><List className="w-4 h-4" /></Button>
            <Separator orientation="vertical" className="h-6 mx-1" />
            <Button variant="ghost" size="icon" onClick={handlePaletteInsert} title="Color Palette"><Palette className="w-4 h-4" /></Button>
            <Button variant="ghost" size="icon" onClick={handleTypographyInsert} title="Typography"><Type className="w-4 h-4" /></Button>
            <Button variant="ghost" size="icon" onClick={handleIconographyInsert} title="Iconography"><Shapes className="w-4 h-4" /></Button>
        </div>
    );
};
