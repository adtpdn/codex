
export type DocPage = {
  slug: string;
  title: string;
  icon: string;
  defaultContent: string;
  group: 'General' | 'Layout' | 'Navigation';
};

export const docPages: DocPage[] = [
  // General
  {
    slug: 'button',
    title: 'Button',
    icon: 'MousePointerSquare',
    group: 'General',
    defaultContent: `# Button\n\nDisplays a button or a component that looks like a button.`
  },
  {
    slug: 'icon',
    title: 'Icon',
    icon: 'Paintbrush',
    group: 'General',
    defaultContent: `# Icon\n\nA component to display an icon.`
  },
  {
    slug: 'typography',
    title: 'Typography',
    icon: 'Type',
    group: 'General',
    defaultContent: `# Typography\n\nUsing a specific font for the UI.`
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
    defaultContent: `# Divider\n\nA visual separator between elements.`
  },
  {
    slug: 'flex',
    title: 'Flex',
    icon: 'MoveHorizontal',
    group: 'Layout',
    defaultContent: `# Flex\n\nA box with flexbox layout.`
  },
  {
    slug: 'grid',
    title: 'Grid',
    icon: 'Grid3x3',
    group: 'Layout',
    defaultContent: `# Grid\n\nA box with grid layout.`
  },
  {
    slug: 'layout',
    title: 'Layout',
    icon: 'LayoutTemplate',
    group: 'Layout',
    defaultContent: `# Layout\n\nComponents for structuring the layout.`
  },
  {
    slug: 'space',
    title: 'Space',
    icon: 'StretchHorizontal',
    group: 'Layout',
    defaultContent: `# Space\n\nA component to add space between elements.`
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
    defaultContent: `# Dropdown\n\nA dropdown menu.`
  },
  {
    slug: 'menu',
    title: 'Menu',
    icon: 'Menu',
    group: 'Navigation',
    defaultContent: `# Menu\n\nA menu of options.`
  },
];
