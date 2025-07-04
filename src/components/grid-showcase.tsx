'use client';

export const GridShowcase = () => {
    const codeSnippet = `
<div className="grid grid-cols-3 gap-2">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div className="col-span-2">Item 4</div>
  <div>Item 5</div>
</div>
    `.trim();

    return (
        <div className="my-6 space-y-8">
            <div>
                <h3 className="font-headline text-xl mb-4 pb-2 border-b">Basic Grid</h3>
                <p className="text-muted-foreground mb-4">Use <code>grid</code> and <code>grid-cols-*</code> to create a basic grid layout. The <code>gap-*</code> utility can be used to add space between grid items, and <code>col-span-*</code> allows an item to span multiple columns.</p>
                <div className="p-6 border rounded-lg bg-card mb-4">
                    <div className="grid grid-cols-3 gap-2 bg-muted p-4 rounded-md">
                        <div className="bg-primary/80 text-primary-foreground p-4 rounded-md text-center">Item 1</div>
                        <div className="bg-primary/80 text-primary-foreground p-4 rounded-md text-center">Item 2</div>
                        <div className="bg-primary/80 text-primary-foreground p-4 rounded-md text-center">Item 3</div>
                        <div className="bg-primary/80 text-primary-foreground p-4 rounded-md col-span-2 text-center">Item 4 (spans 2)</div>
                        <div className="bg-primary/80 text-primary-foreground p-4 rounded-md text-center">Item 5</div>
                    </div>
                </div>
                <pre className="bg-muted dark:bg-black/50 rounded-lg font-code text-sm overflow-x-auto">
                    <code className="block p-4">{codeSnippet}</code>
                </pre>
            </div>
        </div>
    )
}
