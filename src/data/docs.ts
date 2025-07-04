
export type DocPage = {
  slug: string;
  title: string;
  icon: string;
  defaultContent: string;
  group: 'Introduction' | 'General' | 'Layout' | 'Navigation' | 'Feedback';
};

export const docPages: DocPage[] = [
  // Introduction
  {
    slug: 'summary',
    title: 'Summary',
    icon: 'Book',
    group: 'Introduction',
    defaultContent: `# Welcome to React Codex\n\nThis is an interactive documentation and component library for your React projects.\n\nUse the sidebar to navigate through different components and design system documentation. You can edit any page to customize its content using Markdown.`
  },
  // General
  {
    slug: 'button',
    title: 'Button',
    icon: 'MousePointerClick',
    group: 'General',
    defaultContent: `# Button\n\nDisplays a button or a component that looks like a button. Buttons can be of different types, sizes, and states.\n\n## Examples\n\nBelow are examples of different button styles and features available in this component library. Each example includes a description of its intended use and a code snippet for easy implementation.\n\n\`\`\`button\n\`\`\``
  },
  {
    slug: 'iconography',
    title: 'Iconography',
    icon: 'Shapes',
    group: 'General',
    defaultContent: `# Iconography\n\nThe library uses [Lucide](https://lucide.dev/) for its icons. The showcase below provides designers and developers with detailed specifications for using icons consistently, including sizing, color, and stroke-width.\n\n\`\`\`iconography\n\`\`\``
  },
  {
    slug: 'typography',
    title: 'Typography',
    icon: 'Type',
    group: 'General',
    defaultContent: `# Typography\n\nThis page outlines the typographic styles used throughout the application, providing designers and developers with the specifications needed to maintain visual consistency.\n\n## Type Scale & Styles\n\nOur typography is built on a set of predefined styles that combine font family, size, and weight. The showcase below demonstrates each style and provides its specific properties.\n\n\`\`\`typography\n[\n  { "tag": "h1", "name": "Heading 1", "fontSize": "3rem", "fontWeight": 700, "fontFamily": "headline" },\n  { "tag": "h2", "name": "Heading 2", "fontSize": "2.25rem", "fontWeight": 700, "fontFamily": "headline" },\n  { "tag": "h3", "name": "Heading 3", "fontSize": "1.875rem", "fontWeight": 700, "fontFamily": "headline" },\n  { "tag": "p", "name": "Body Text", "fontSize": "1rem", "fontWeight": 400, "fontFamily": "body" },\n  { "tag": "code", "name": "Code Text", "fontSize": "0.875rem", "fontWeight": 400, "fontFamily": "code" }\n]\n\`\`\`\n`
  },
  {
    slug: 'colors',
    title: 'Colors',
    icon: 'Palette',
    group: 'General',
    defaultContent: `# Colors\n\nColor is a fundamental part of the design system. This page documents the primary and neutral color palettes used in the application. Each color swatch includes its name, HEX, and RGB values for easy reference in design tools.\n\n## Theme Colors\n\nThese are the main colors that define the application's theme. They are used for primary actions, accents, and backgrounds.\n\n\`\`\`palette\n[\n  { "name": "Primary", "hex": "#8ab4f8" },\n  { "name": "Accent", "hex": "#a779e4" },\n  { "name": "Background", "hex": "#f1f3f6" },\n  { "name": "Foreground", "hex": "#09090b" }\n]\n\`\`\`\n\n## Neutral Color Palette\n\nA comprehensive grayscale palette for backgrounds, borders, and text.\n\n\`\`\`palette\n[\n  { "name": "gray-1", "hex": "#ffffff" },\n  { "name": "gray-2", "hex": "#fafafa" },\n  { "name": "gray-3", "hex": "#f5f5f5" },\n  { "name": "gray-4", "hex": "#f0f0f0" },\n  { "name": "gray-5", "hex": "#d9d9d9" },\n  { "name": "gray-6", "hex": "#bfbfbf" },\n  { "name": "gray-7", "hex": "#8c8c8c" },\n  { "name": "gray-8", "hex": "#595959" },\n  { "name": "gray-9", "hex": "#434343" },\n  { "name": "gray-10", "hex": "#262626" },\n  { "name": "gray-11", "hex": "#1f1f1f" },\n  { "name": "gray-12", "hex": "#141414" },\n  { "name": "gray-13", "hex": "#000000" }\n]\n\`\`\``
  },
  // Layout
  {
    slug: 'divider',
    title: 'Divider',
    icon: 'Minus',
    group: 'Layout',
    defaultContent: `# Divider\n\nA visual separator between elements.\n\n---\n\nUse three hyphens to create a horizontal rule.`
  },
  {
    slug: 'flex',
    title: 'Flex',
    icon: 'MoveHorizontal',
    group: 'Layout',
    defaultContent: `# Flex\n\nA box with flexbox layout.\n\n\`\`\`flex\n\`\`\``
  },
  {
    slug: 'grid',
    title: 'Grid',
    icon: 'Grid3x3',
    group: 'Layout',
    defaultContent: `# Grid\n\nA box with grid layout.\n\n\`\`\`grid\n\`\`\``
  },
  {
    slug: 'layout',
    title: 'Layout',
    icon: 'LayoutTemplate',
    group: 'Layout',
    defaultContent: `# Layout\n\nComponents for structuring the layout.\n\n\`\`\`layout\n\`\`\``
  },
  {
    slug: 'space',
    title: 'Space',
    icon: 'StretchHorizontal',
    group: 'Layout',
    defaultContent: `# Space\n\nA component to add space between elements.\n\n\`\`\`space\n\`\`\``
  },
  {
    slug: 'splitter',
    title: 'Splitter',
    icon: 'SplitSquareHorizontal',
    group: 'Layout',
    defaultContent: `# Splitter\n\nA component to split content.`
  },
  // Navigation
  {
    slug: 'dropdown',
    title: 'Dropdown',
    icon: 'ChevronDownSquare',
    group: 'Navigation',
    defaultContent: `# Dropdown\n\nA dropdown menu that allows selection from a tree structure.\n\n\`\`\`dropdown\n\`\`\``
  },
  {
    slug: 'menu',
    title: 'Menu',
    icon: 'Menu',
    group: 'Navigation',
    defaultContent: `# Menu\n\nA menu of options.`
  },
  // Feedback
  {
    slug: 'alert',
    title: 'Alert',
    icon: 'AlertTriangle',
    group: 'Feedback',
    defaultContent: `# Alert\n\nDisplays a callout for user attention.\n\n\`\`\`alert\n\`\`\``
  },
  {
    slug: 'modal',
    title: 'Form',
    icon: 'FileText',
    group: 'Feedback',
    defaultContent: `# Form\n\nA complex form example with various inputs, validation, and dynamic item management.\n\n\`\`\`modal\n\`\`\``
  },
];
