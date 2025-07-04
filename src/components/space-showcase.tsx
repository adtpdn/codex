'use client';

export const SpaceShowcase = () => {
    const codeSnippets = {
        gap: `<div className="flex gap-4">...</div>`,
        margin: `
<div className="mb-2">...</div> // Margin Bottom 0.5rem (8px)
<div className="ml-8">...</div> // Margin Left 2rem (32px)
<div className="mt-4">...</div> // Margin Top 1rem (16px)
        `.trim()
    }
    return (
        <div className="my-6 space-y-8">
            <div>
                <h3 className="font-headline text-xl mb-4 pb-2 border-b">Gap Utility</h3>
                <p className="text-muted-foreground mb-4">The <code>gap-*</code> utility is used with flexbox or grid containers to add uniform space between items. This is the preferred method for managing space between elements in a layout.</p>
                <div className="p-6 border rounded-lg bg-card mb-4">
                    <div className="flex flex-wrap gap-4 bg-muted p-4 rounded-md">
                        <div className="bg-primary/80 text-primary-foreground p-4 rounded-md">gap-4</div>
                        <div className="bg-primary/80 text-primary-foreground p-4 rounded-md">gap-4</div>
                        <div className="bg-primary/80 text-primary-foreground p-4 rounded-md">gap-4</div>
                    </div>
                </div>
                <pre className="bg-muted dark:bg-black/50 rounded-lg font-code text-sm overflow-x-auto">
                    <code className="block p-4">{codeSnippets.gap}</code>
                </pre>
            </div>
            <div>
                <h3 className="font-headline text-xl mb-4 pb-2 border-b">Margin Utilities</h3>
                <p className="text-muted-foreground mb-4">Use margin utilities like <code>m-*</code>, <code>mx-*</code>, <code>my-*</code>, <code>mt-*</code>, etc., to add space around individual elements. The number corresponds to Tailwind's spacing scale, where 1 unit = 0.25rem = 4px.</p>
                <div className="p-6 border rounded-lg bg-card mb-4">
                    <div className="bg-muted p-4 rounded-md">
                        <div className="bg-primary/80 text-primary-foreground p-4 rounded-md mb-2">margin-bottom-2</div>
                        <div className="bg-primary/80 text-primary-foreground p-4 rounded-md ml-8">margin-left-8</div>
                        <div className="bg-primary/80 text-primary-foreground p-4 rounded-md mt-4">margin-top-4</div>
                    </div>
                </div>
                <pre className="bg-muted dark:bg-black/50 rounded-lg font-code text-sm overflow-x-auto">
                    <code className="block p-4">{codeSnippets.margin}</code>
                </pre>
            </div>
        </div>
    )
}
