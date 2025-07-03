
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
    icon: '🔘',
    group: 'General',
    defaultContent: `# Button\n\nDisplays a button or a component that looks like a button.`
  },
  {
    slug: 'icon',
    title: 'Icon',
    icon: '🎨',
    group: 'General',
    defaultContent: `# Icon\n\nA component to display an icon.`
  },
  {
    slug: 'typography',
    title: 'Typography',
    icon: '✍️',
    group: 'General',
    defaultContent: `# Typography\n\nUsing a specific font for the UI.`
  },
  // Layout
  {
    slug: 'divider',
    title: 'Divider',
    icon: '➖',
    group: 'Layout',
    defaultContent: `# Divider\n\nA visual separator between elements.`
  },
  {
    slug: 'flex',
    title: 'Flex',
    icon: '🤸',
    group: 'Layout',
    defaultContent: `# Flex\n\nA box with flexbox layout.`
  },
  {
    slug: 'grid',
    title: 'Grid',
    icon: '🏁',
    group: 'Layout',
    defaultContent: `# Grid\n\nA box with grid layout.`
  },
  {
    slug: 'layout',
    title: 'Layout',
    icon: '🏗️',
    group: 'Layout',
    defaultContent: `# Layout\n\nComponents for structuring the layout.`
  },
  {
    slug: 'space',
    title: 'Space',
    icon: '🚀',
    group: 'Layout',
    defaultContent: `# Space\n\nA component to add space between elements.`
  },
  {
    slug: 'splitter',
    title: 'Splitter',
    icon: '↔️',
    group: 'Layout',
    defaultContent: `# Splitter\n\nA component to split content.`
  },
  // Navigation
  {
    slug: 'dropdown',
    title: 'Dropdown',
    icon: '🔽',
    group: 'Navigation',
    defaultContent: `# Dropdown\n\nA dropdown menu.`
  },
  {
    slug: 'menu',
    title: 'Menu',
    icon: '🍔',
    group: 'Navigation',
    defaultContent: `# Menu\n\nA menu of options.`
  },
];
