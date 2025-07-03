'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
  
    return (
        <div className="my-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Basic</CardTitle>
                    <CardDescription>The most basic usage.</CardDescription>
                </CardHeader>
                <CardContent>
                    <TreeSelect
                        treeData={treeData}
                        value={basicValue}
                        onChange={setBasicValue}
                        placeholder="Select a value"
                    />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Multiple Selection</CardTitle>
                    <CardDescription>Multiple selection usage.</CardDescription>
                </CardHeader>
                <CardContent>
                    <TreeSelect
                        treeData={treeData}
                        value={multipleValue}
                        onChange={setMultipleValue}
                        multiple
                        placeholder="Select values"
                    />
                </CardContent>
            </Card>
        </div>
    );
};
