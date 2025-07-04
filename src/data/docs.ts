
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
    defaultContent: `# Button\n\nDisplays a button or a component that looks like a button. Buttons can be of different types, sizes, and states.\n\n## Examples\n\nBelow are examples of different button styles and features available in this component library.\n\n\`\`\`button\n\`\`\``
  },
  {
    slug: 'iconography',
    title: 'Iconography',
    icon: 'Shapes',
    group: 'General',
    defaultContent: `# Iconography\n\nThe library uses [Lucide](https://lucide.dev/) for its icons. Here are some examples of how to use them.\n\n\`\`\`iconography\n\`\`\``
  },
  {
    slug: 'typography',
    title: 'Typography',
    icon: 'Type',
    group: 'General',
    defaultContent: `## Typography Showcase

Use a special \`typography\` code block to render a typography style showcase.
The content of the block must be a valid JSON array of objects with the following properties:
- \`tag\`: The HTML tag (e.g., "h1", "p").
- \`name\`: The display name for the style.
- \`fontSize\`: The font size (e.g., "3rem").
- \`fontWeight\`: The font weight (e.g., 700).
- \`fontFamily\`: One of "body", "headline", or "code".

\`\`\`typography
[
  { "tag": "h1", "name": "Heading 1", "fontSize": "3rem", "fontWeight": 700, "fontFamily": "headline" },
  { "tag": "h2", "name": "Heading 2", "fontSize": "2.25rem", "fontWeight": 700, "fontFamily": "headline" },
  { "tag": "h3", "name": "Heading 3", "fontSize": "1.875rem", "fontWeight": 700, "fontFamily": "headline" },
  { "tag": "p", "name": "Body Text", "fontSize": "1rem", "fontWeight": 400, "fontFamily": "body" },
  { "tag": "code", "name": "Code Text", "fontSize": "0.875rem", "fontWeight": 400, "fontFamily": "code" }
]
\`\`\`
`
  },
  {
    slug: 'colors',
    title: 'Colors',
    icon: 'Palette',
    group: 'General',
    defaultContent: `## Color Palettes

Use a special \`palette\` code block to render a color palette showcase.
The content of the block must be a valid JSON array of objects, where each object has a \`name\` (string) and a \`hex\` (string) property.

### Neutral Color Palette

\`\`\`palette
[
  { "name": "gray-1", "hex": "#ffffff" },
  { "name": "gray-2", "hex": "#fafafa" },
  { "name": "gray-3", "hex": "#f5f5f5" },
  { "name": "gray-4", "hex": "#f0f0f0" },
  { "name": "gray-5", "hex": "#d9d9d9" },
  { "name": "gray-6", "hex": "#bfbfbf" },
  { "name": "gray-7", "hex": "#8c8c8c" },
  { "name": "gray-8", "hex": "#595959" },
  { "name": "gray-9", "hex": "#434343" },
  { "name": "gray-10", "hex": "#262626" },
  { "name": "gray-11", "hex": "#1f1f1f" },
  { "name": "gray-12", "hex": "#141414" },
  { "name": "gray-13", "hex": "#000000" }
]
\`\`\`
`
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
