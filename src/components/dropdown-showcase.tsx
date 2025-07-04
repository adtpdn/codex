'use client';

import React from 'react';
import type { TreeNode } from '@/components/ui/tree-select';
import { TreeSelect } from '@/components/ui/tree-select';

const treeData: TreeNode[] = [
  {
    title: 'parent 1',
    value: 'parent 1',
    children: [
      {
        title: 'parent 1-0',
        value: 'parent 1-0',
        children: [
          { title: 'my leaf', value: 'my leaf' },
          { title: 'your leaf', value: 'your leaf' },
        ],
      },
      {
        title: 'parent 1-1',
        value: 'parent 1-1',
        children: [{ title: 'sss', value: 'sss' }],
      },
    ],
  },
];

export const DropdownShowcase = () => {
    const [basicValue, setBasicValue] = React.useState<string | string[] | undefined>('parent 1-0');
    const [multipleValue, setMultipleValue] = React.useState<string | string[] | undefined>(['my leaf', 'your leaf', 'sss']);

    const codeSnippets = {
      data: `
const treeData: TreeNode[] = [
  {
    title: 'parent 1',
    value: 'parent 1',
    children: [
      { title: 'parent 1-0', value: 'parent 1-0', children: [...] },
      { title: 'parent 1-1', value: 'parent 1-1', children: [...] },
    ],
  },
];
      `.trim(),
      basic: `
<TreeSelect
  treeData={treeData}
  value={value}
  onChange={setValue}
  placeholder="Select a value"
/>
      `.trim(),
      multiple: `
<TreeSelect
  treeData={treeData}
  value={values}
  onChange={setValues}
  multiple
  placeholder="Select values"
/>
      `.trim(),
    }
  
    return (
        <div className="my-6 space-y-8">
            <div>
                <h3 className="font-headline text-xl mb-4 pb-2 border-b">Basic</h3>
                <p className="text-muted-foreground mb-4">The most basic usage for single selection from a hierarchical data structure.</p>
                <div className="p-6 border rounded-lg bg-card mb-4">
                    <TreeSelect
                        treeData={treeData}
                        value={basicValue}
                        onChange={setBasicValue}
                        placeholder="Select a value"
                    />
                </div>
                 <pre className="bg-muted dark:bg-black/50 rounded-lg font-code text-sm overflow-x-auto">
                    <code className="block p-4">{codeSnippets.basic}</code>
                </pre>
            </div>

            <div>
                <h3 className="font-headline text-xl mb-4 pb-2 border-b">Multiple Selection</h3>
                <p className="text-muted-foreground mb-4">Enable the <code>multiple</code> prop to allow users to select multiple values. The component will display selected items as badges.</p>
                <div className="p-6 border rounded-lg bg-card mb-4">
                    <TreeSelect
                        treeData={treeData}
                        value={multipleValue}
                        onChange={setMultipleValue}
                        multiple
                        placeholder="Select values"
                    />
                </div>
                 <pre className="bg-muted dark:bg-black/50 rounded-lg font-code text-sm overflow-x-auto">
                    <code className="block p-4">{codeSnippets.multiple}</code>
                </pre>
            </div>

            <div>
                <h3 className="font-headline text-xl mb-4 pb-2 border-b">Data Structure</h3>
                <p className="text-muted-foreground mb-4">The <code>TreeSelect</code> component requires an array of <code>TreeNode</code> objects, which can be nested.</p>
                 <pre className="bg-muted dark:bg-black/50 rounded-lg font-code text-sm overflow-x-auto">
                    <code className="block p-4">{codeSnippets.data}</code>
                </pre>
            </div>
        </div>
    );
};
