'use client';

export const GridShowcase = () => {
    return (
        <div className="my-6 p-4 border rounded-lg">
            <h4 className="font-headline text-lg mb-4">Grid Container (3 columns)</h4>
            <div className="grid grid-cols-3 gap-2 bg-muted p-4 rounded-md">
                <div className="bg-primary/80 text-primary-foreground p-4 rounded-md text-center">Item 1</div>
                <div className="bg-primary/80 text-primary-foreground p-4 rounded-md text-center">Item 2</div>
                <div className="bg-primary/80 text-primary-foreground p-4 rounded-md text-center">Item 3</div>
                <div className="bg-primary/80 text-primary-foreground p-4 rounded-md col-span-2 text-center">Item 4 (spans 2 cols)</div>
                <div className="bg-primary/80 text-primary-foreground p-4 rounded-md text-center">Item 5</div>
            </div>
        </div>
    )
}
