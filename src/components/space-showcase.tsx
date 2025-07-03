'use client';

export const SpaceShowcase = () => {
    return (
        <div className="my-6 p-4 border rounded-lg space-y-4">
            <h4 className="font-headline text-lg mb-2">Spacing with "gap" utility</h4>
            <div className="flex flex-wrap gap-4 bg-muted p-4 rounded-md">
                <div className="bg-primary/80 text-primary-foreground p-4 rounded-md">gap-4</div>
                <div className="bg-primary/80 text-primary-foreground p-4 rounded-md">gap-4</div>
                <div className="bg-primary/80 text-primary-foreground p-4 rounded-md">gap-4</div>
            </div>
             <h4 className="font-headline text-lg mb-2">Spacing with "margin" utility</h4>
            <div className="bg-muted p-4 rounded-md">
                <div className="bg-primary/80 text-primary-foreground p-4 rounded-md mb-2">margin-bottom-2</div>
                <div className="bg-primary/80 text-primary-foreground p-4 rounded-md ml-8">margin-left-8</div>
                <div className="bg-primary/80 text-primary-foreground p-4 rounded-md mt-4">margin-top-4</div>
            </div>
        </div>
    )
}
