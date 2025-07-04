'use client';

import { Button } from "@/components/ui/button";
import { Plus, Search, Loader2 } from "lucide-react";

export const ButtonShowcase = () => {
    const codeSnippets = {
        variants: `
<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
        `.trim(),
        sizes: `
<Button size="lg">Large</Button>
<Button size="default">Default</Button>
<Button size="sm">Small</Button>
        `.trim(),
        icons: `
import { Plus, Search } from "lucide-react";

<Button>
  <Plus className="mr-2 h-4 w-4" />
  Add Item
</Button>

<Button variant="outline">
  Search
  <Search className="ml-2 h-4 w-4" />
</Button>

<Button size="icon" aria-label="Search">
  <Search className="h-4 w-4" />
</Button>

<Button variant="outline" size="icon" aria-label="Add Item">
  <Plus className="h-4 w-4" />
</Button>
        `.trim(),
        loading: `
import { Loader2 } from "lucide-react";

<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>

<Button variant="outline" size="icon" disabled>
  <Loader2 className="h-4 w-4 animate-spin" />
</Button>
        `.trim(),
        disabled: `
<Button disabled>Default</Button>
<Button variant="secondary" disabled>Secondary</Button>
<Button variant="destructive" disabled>Destructive</Button>
<Button variant="outline" disabled>Outline</Button>
<Button variant="ghost" disabled>Ghost</Button>
<Button variant="link" disabled>Link</Button>
        `.trim(),
        block: `
<Button className="w-full">Full Width Button</Button>
        `.trim()
    }

    return (
        <div className="my-6 space-y-8">
            <div>
                <h3 className="font-headline text-xl mb-4 pb-2 border-b">Button Types</h3>
                <p className="text-muted-foreground mb-4">There are 6 primary button variants: default, secondary, destructive, outline, ghost, and link.</p>
                <div className="p-6 border rounded-lg bg-card mb-4">
                    <div className="flex flex-wrap gap-4 items-center">
                        <Button>Default</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link</Button>
                    </div>
                </div>
                <pre className="bg-muted dark:bg-black/50 rounded-lg font-code text-sm overflow-x-auto">
                    <code className="block p-4">{codeSnippets.variants}</code>
                </pre>
            </div>

            <div>
                <h3 className="font-headline text-xl mb-4 pb-2 border-b">Sizes</h3>
                <p className="text-muted-foreground mb-4">Buttons come in three sizes: large, default, and small.</p>
                <div className="p-6 border rounded-lg bg-card mb-4">
                    <div className="flex flex-wrap gap-4 items-end">
                        <Button size="lg">Large</Button>
                        <Button size="default">Default</Button>
                        <Button size="sm">Small</Button>
                    </div>
                </div>
                 <pre className="bg-muted dark:bg-black/50 rounded-lg font-code text-sm overflow-x-auto">
                    <code className="block p-4">{codeSnippets.sizes}</code>
                </pre>
            </div>

            <div>
                <h3 className="font-headline text-xl mb-4 pb-2 border-b">Icon Buttons</h3>
                <p className="text-muted-foreground mb-4">Buttons can contain an Icon. This is done by adding an icon component inside the Button.</p>
                <div className="p-6 border rounded-lg bg-card mb-4">
                    <div className="flex flex-wrap gap-4 items-center">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            <span>Add Item</span>
                        </Button>
                        <Button variant="outline">
                            <span>Search</span>
                            <Search className="ml-2 h-4 w-4" />
                        </Button>
                        <Button size="icon" aria-label="Search">
                            <Search className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" aria-label="Add Item">
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
                 <pre className="bg-muted dark:bg-black/50 rounded-lg font-code text-sm overflow-x-auto">
                    <code className="block p-4">{codeSnippets.icons}</code>
                </pre>
            </div>

            <div>
                <h3 className="font-headline text-xl mb-4 pb-2 border-b">Loading State</h3>
                <p className="text-muted-foreground mb-4">A loading indicator can be shown in a button by passing the `disabled` prop and including a loading icon.</p>
                <div className="p-6 border rounded-lg bg-card mb-4">
                    <div className="flex flex-wrap gap-4 items-center">
                         <Button disabled>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </Button>
                        <Button variant="outline" size="icon" disabled>
                            <Loader2 className="h-4 w-4 animate-spin" />
                        </Button>
                    </div>
                </div>
                 <pre className="bg-muted dark:bg-black/50 rounded-lg font-code text-sm overflow-x-auto">
                    <code className="block p-4">{codeSnippets.loading}</code>
                </pre>
            </div>

            <div>
                <h3 className="font-headline text-xl mb-4 pb-2 border-b">Disabled State</h3>
                <p className="text-muted-foreground mb-4">To disable a button, add the `disabled` prop.</p>
                <div className="p-6 border rounded-lg bg-card mb-4">
                     <div className="flex flex-wrap gap-4 items-center">
                        <Button disabled>Default</Button>
                        <Button variant="secondary" disabled>Secondary</Button>
                        <Button variant="destructive" disabled>Destructive</Button>
                        <Button variant="outline" disabled>Outline</Button>
                        <Button variant="ghost" disabled>Ghost</Button>
                        <Button variant="link" disabled>Link</Button>
                    </div>
                </div>
                 <pre className="bg-muted dark:bg-black/50 rounded-lg font-code text-sm overflow-x-auto">
                    <code className="block p-4">{codeSnippets.disabled}</code>
                </pre>
            </div>

             <div>
                <h3 className="font-headline text-xl mb-4 pb-2 border-b">Block Button</h3>
                <p className="text-muted-foreground mb-4">A block button spans the full width of its parent container.</p>
                <div className="p-6 border rounded-lg bg-card mb-4">
                    <Button className="w-full">Full Width Button</Button>
                </div>
                 <pre className="bg-muted dark:bg-black/50 rounded-lg font-code text-sm overflow-x-auto">
                    <code className="block p-4">{codeSnippets.block}</code>
                </pre>
            </div>
        </div>
    )
}
