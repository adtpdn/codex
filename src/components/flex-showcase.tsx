'use client';

export const FlexShowcase = () => {
    return (
        <div className="my-6 p-4 border rounded-lg">
            <h4 className="font-headline text-lg mb-4">Flex Container (justify-start)</h4>
            <div className="flex justify-start gap-2 bg-muted p-4 rounded-md mb-4">
                <div className="bg-primary text-primary-foreground p-4 rounded-md">Item 1</div>
                <div className="bg-primary text-primary-foreground p-4 rounded-md">Item 2</div>
                <div className="bg-primary text-primary-foreground p-4 rounded-md">Item 3</div>
            </div>
            <h4 className="font-headline text-lg mb-4">Flex Container (justify-center)</h4>
            <div className="flex justify-center gap-2 bg-muted p-4 rounded-md mb-4">
                <div className="bg-primary text-primary-foreground p-4 rounded-md">Item 1</div>
                <div className="bg-primary text-primary-foreground p-4 rounded-md">Item 2</div>
                <div className="bg-primary text-primary-foreground p-4 rounded-md">Item 3</div>
            </div>
            <h4 className="font-headline text-lg mb-4">Flex Container (justify-end)</h4>
            <div className="flex justify-end gap-2 bg-muted p-4 rounded-md">
                <div className="bg-primary text-primary-foreground p-4 rounded-md">Item 1</div>
                <div className="bg-primary text-primary-foreground p-4 rounded-md">Item 2</div>
                <div className="bg-primary text-primary-foreground p-4 rounded-md">Item 3</div>
            </div>
        </div>
    )
}
