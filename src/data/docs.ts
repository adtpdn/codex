
export type DocPage = {
  slug: string;
  title: string;
  icon: string;
  defaultContent: string;
};

export const docPages: DocPage[] = [
  {
    slug: 'introduction',
    title: 'Introduction',
    icon: '👋',
    defaultContent: `# React Codex: Design System Docs

Welcome to React Codex, a live editor for your design system documentation. Start typing in the markdown editor to see the magic happen! ✨

## Core Features

- **Content Editor**: Markdown-based documentation editor with live preview.
- **Dynamic Navigation**: Dynamic navigation generation based on document structure.
- **Code Snippet Highlighting**: Support for code snippets with syntax highlighting.
- **Real-time Search**: Quickly find relevant documentation sections.
- **Theme Switching**: Toggle between light and dark modes.
`
  },
  {
    slug: 'react-example',
    title: 'React Example',
    icon: '⚛️',
    defaultContent: `## React Code Example

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
`
  },
  {
    slug: 'css-example',
    title: 'CSS Example',
    icon: '🎨',
    defaultContent: `## CSS Code Example

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
`
  },
   {
    slug: 'more-markdown',
    title: 'More Markdown',
    icon: '📝',
    defaultContent: `### A Third-level Heading

You can even add multiple levels of headings.

#### And a fourth

You can use lists, **bold text**, \`inline code\`, and more.

- First item
- Second item
- Third item
`
  }
];
