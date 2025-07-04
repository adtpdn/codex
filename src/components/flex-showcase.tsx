'use client';

export const FlexShowcase = () => {
    const codeSnippets = {
        start: `<div className="flex justify-start">...</div>`,
        center: `<div className="flex justify-center">...</div>`,
        end: `<div className="flex justify-end">...</div>`
    };

    return (
        <div className="my-6 space-y-8">
            <div>
                <h3 className="font-headline text-xl mb-4 pb-2 border-b">Justify Start</h3>
                <p className="text-muted-foreground mb-4">Use <code>justify-start</code> to align flex items to the beginning of the container's main axis.</p>
                <div className="p-6 border rounded-lg bg-card mb-4">
                    <div className="flex justify-start gap-2 bg-muted p-4 rounded-md">
                        <div className="bg-primary text-primary-foreground p-4 rounded-md">Item 1</div>
                        <div className="bg-primary text-primary-foreground p-4 rounded-md">Item 2</div>
                        <div className="bg-primary text-primary-foreground p-4 rounded-md">Item 3</div>
                    </div>
                </div>
                <pre className="bg-muted dark:bg-black/50 rounded-lg font-code text-sm overflow-x-auto">
                    <code className="block p-4">{codeSnippets.start}</code>
                </pre>
            </div>
            <div>
                <h3 className="font-headline text-xl mb-4 pb-2 border-b">Justify Center</h3>
                <p className="text-muted-foreground mb-4">Use <code>justify-center</code> to align flex items along the center of the container's main axis.</p>
                <div className="p-6 border rounded-lg bg-card mb-4">
                     <div className="flex justify-center gap-2 bg-muted p-4 rounded-md">
                        <div className="bg-primary text-primary-foreground p-4 rounded-md">Item 1</div>
                        <div className="bg-primary text-primary-foreground p-4 rounded-md">Item 2</div>
                        <div className="bg-primary text-primary-foreground p-4 rounded-md">Item 3</div>
                    </div>
                </div>
                <pre className="bg-muted dark:bg-black/50 rounded-lg font-code text-sm overflow-x-auto">
                    <code className="block p-4">{codeSnippets.center}</code>
                </pre>
            </div>
            <div>
                <h3 className="font-headline text-xl mb-4 pb-2 border-b">Justify End</h3>
                <p className="text-muted-foreground mb-4">Use <code>justify-end</code> to align flex items to the end of the container's main axis.</p>
                <div className="p-6 border rounded-lg bg-card mb-4">
                    <div className="flex justify-end gap-2 bg-muted p-4 rounded-md">
                        <div className="bg-primary text-primary-foreground p-4 rounded-md">Item 1</div>
                        <div className="bg-primary text-primary-foreground p-4 rounded-md">Item 2</div>
                        <div className="bg-primary text-primary-foreground p-4 rounded-md">Item 3</div>
                    </div>
                </div>
                <pre className="bg-muted dark:bg-black/50 rounded-lg font-code text-sm overflow-x-auto">
                    <code className="block p-4">{codeSnippets.end}</code>
                </pre>
            </div>
        </div>
    )
}
