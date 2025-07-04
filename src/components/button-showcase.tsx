
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
                <p className="text-muted-foreground mb-4">The `variant` prop controls the visual style of the button. Each variant is designed for a specific purpose to guide the user's attention and actions.</p>
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
                <p className="text-muted-foreground mb-4">The `size` prop controls the button's dimensions. Consistent sizing helps maintain a balanced and predictable layout. The available sizes are `lg` (44px), `default` (40px), and `sm` (36px).</p>
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
                <p className="text-muted-foreground mb-4">Icons can be included to add visual context. For consistency, use `lucide-react` icons. When placing an icon next to text, a margin of `mr-2` or `ml-2` (8px) should be applied to ensure proper spacing.</p>
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
                <p className="text-muted-foreground mb-4">The `disabled` prop paired with a spinning icon provides clear feedback for actions that are in progress. The `Loader2` icon from `lucide-react` is used here with an `animate-spin` class.</p>
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
                <p className="text-muted-foreground mb-4">The `disabled` prop deactivates the button and applies a distinct visual style to indicate that it's not interactive.</p>
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
                <p className="text-muted-foreground mb-4">Adding the `w-full` utility class will make a button expand to the full width of its parent container. This is useful for forms and mobile layouts.</p>
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
