'use client';

import LucideIcon from "@/components/lucide-icon";

export const IconographyShowcase = () => {
    const codeSnippets = {
        basic: `
import LucideIcon from "@/components/lucide-icon";

<LucideIcon name="Home" />
<LucideIcon name="Settings" />
<LucideIcon name="User" />
<LucideIcon name="Search" />
        `.trim(),
        sizing: `
<LucideIcon name="Star" className="h-4 w-4" />
<LucideIcon name="Star" className="h-6 w-6" />
<LucideIcon name="Star" className="h-8 w-8" />
<LucideIcon name="Star" className="h-12 w-12" />
        `.trim(),
        coloring: `
<LucideIcon name="CheckCircle" className="h-6 w-6 text-primary" />
<LucideIcon name="XCircle" className="h-6 w-6 text-destructive" />
<LucideIcon name="Info" className="h-6 w-6 text-accent" />
<LucideIcon name="HelpCircle" className="h-6 w-6 text-muted-foreground" />
        `.trim(),
        stroke: `
<LucideIcon name="Package" className="h-8 w-8" strokeWidth={1} />
<LucideIcon name="Package" className="h-8 w-8" strokeWidth={1.5} />
<LucideIcon name="Package" className="h-8 w-8" strokeWidth={2} />
<LucideIcon name="Package" className="h-8 w-8" strokeWidth={3} />
        `.trim(),
    };

    return (
        <div className="my-6 space-y-8">
            <div>
                <h3 className="font-headline text-xl mb-4 pb-2 border-b">Basic Usage</h3>
                <p className="text-muted-foreground mb-4">
                    Use the <code>LucideIcon</code> component to render icons. Pass the icon's name (in PascalCase) to the <code>name</code> prop.
                </p>
                <div className="p-6 border rounded-lg bg-card mb-4">
                    <div className="flex flex-wrap gap-6 items-center">
                        <LucideIcon name="Home" className="w-6 h-6" />
                        <LucideIcon name="Settings" className="w-6 h-6" />
                        <LucideIcon name="User" className="w-6 h-6" />
                        <LucideIcon name="Search" className="w-6 h-6" />
                    </div>
                </div>
                <pre className="bg-muted dark:bg-black/50 rounded-lg font-code text-sm overflow-x-auto">
                    <code className="block p-4">{codeSnippets.basic}</code>
                </pre>
            </div>

            <div>
                <h3 className="font-headline text-xl mb-4 pb-2 border-b">Sizing</h3>
                <p className="text-muted-foreground mb-4">
                    Control icon size using Tailwind's height and width utilities.
                </p>
                <div className="p-6 border rounded-lg bg-card mb-4">
                    <div className="flex flex-wrap gap-6 items-end">
                        <LucideIcon name="Star" className="h-4 w-4" />
                        <LucideIcon name="Star" className="h-6 w-6" />
                        <LucideIcon name="Star" className="h-8 w-8" />
                        <LucideIcon name="Star" className="h-12 w-12" />
                    </div>
                </div>
                 <pre className="bg-muted dark:bg-black/50 rounded-lg font-code text-sm overflow-x-auto">
                    <code className="block p-4">{codeSnippets.sizing}</code>
                </pre>
            </div>

            <div>
                <h3 className="font-headline text-xl mb-4 pb-2 border-b">Coloring</h3>
                <p className="text-muted-foreground mb-4">
                    Change icon color by applying text color utilities. Use semantic theme colors where possible.
                </p>
                <div className="p-6 border rounded-lg bg-card mb-4">
                    <div className="flex flex-wrap gap-6 items-center">
                        <LucideIcon name="CheckCircle" className="h-6 w-6 text-primary" />
                        <LucideIcon name="XCircle" className="h-6 w-6 text-destructive" />
                        <LucideIcon name="Info" className="h-6 w-6 text-accent" />
                        <LucideIcon name="HelpCircle" className="h-6 w-6 text-muted-foreground" />
                    </div>
                </div>
                 <pre className="bg-muted dark:bg-black/50 rounded-lg font-code text-sm overflow-x-auto">
                    <code className="block p-4">{codeSnippets.coloring}</code>
                </pre>
            </div>

            <div>
                <h3 className="font-headline text-xl mb-4 pb-2 border-b">Stroke Width</h3>
                <p className="text-muted-foreground mb-4">
                    Some icons support adjusting the <code>strokeWidth</code> prop for a thicker or thinner appearance.
                </p>
                <div className="p-6 border rounded-lg bg-card mb-4">
                    <div className="flex flex-wrap gap-6 items-center">
                        <LucideIcon name="Package" className="h-8 w-8" strokeWidth={1} />
                        <LucideIcon name="Package" className="h-8 w-8" strokeWidth={1.5} />
                        <LucideIcon name="Package" className="h-8 w-8" strokeWidth={2} />
                        <LucideIcon name="Package" className="h-8 w-8" strokeWidth={3} />
                    </div>
                </div>
                 <pre className="bg-muted dark:bg-black/50 rounded-lg font-code text-sm overflow-x-auto">
                    <code className="block p-4">{codeSnippets.stroke}</code>
                </pre>
            </div>
        </div>
    )
}
