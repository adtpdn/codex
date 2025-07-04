
'use client';

import LucideIcon from "@/components/lucide-icon";
import { Badge } from "@/components/ui/badge";

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
<LucideIcon name="Star" className="h-4 w-4" /> // 16px
<LucideIcon name="Star" className="h-6 w-6" /> // 24px
<LucideIcon name="Star" className="h-8 w-8" /> // 32px
<LucideIcon name="Star" className="h-12 w-12" /> // 48px
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
                    Use the <code>LucideIcon</code> component to render icons from the <a href="https://lucide.dev/icons/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Lucide icon set</a>. Pass the icon's name (in PascalCase) to the <code>name</code> prop. The default size is 24x24px (w-6, h-6).
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
                    Control icon size using Tailwind's height and width utilities (e.g., <code>h-4 w-4</code>). The number in the class name corresponds to Tailwind's spacing scale (1 unit = 0.25rem = 4px).
                </p>
                <div className="p-6 border rounded-lg bg-card mb-4">
                    <div className="flex flex-wrap gap-x-8 gap-y-4 items-end">
                        <div className="flex flex-col items-center gap-2">
                            <LucideIcon name="Star" className="h-4 w-4" />
                            <Badge variant="outline">16px (h-4 w-4)</Badge>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <LucideIcon name="Star" className="h-6 w-6" />
                            <Badge variant="outline">24px (h-6 w-6)</Badge>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <LucideIcon name="Star" className="h-8 w-8" />
                            <Badge variant="outline">32px (h-8 w-8)</Badge>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <LucideIcon name="Star" className="h-12 w-12" />
                            <Badge variant="outline">48px (h-12 w-12)</Badge>
                        </div>
                    </div>
                </div>
                 <pre className="bg-muted dark:bg-black/50 rounded-lg font-code text-sm overflow-x-auto">
                    <code className="block p-4">{codeSnippets.sizing}</code>
                </pre>
            </div>

            <div>
                <h3 className="font-headline text-xl mb-4 pb-2 border-b">Coloring</h3>
                <p className="text-muted-foreground mb-4">
                    Change icon color by applying text color utilities (e.g., <code>text-primary</code>). Use the semantic theme colors defined in <code>globals.css</code> for consistency. The icon will inherit the color from its parent element if no explicit color is set.
                </p>
                <div className="p-6 border rounded-lg bg-card mb-4">
                    <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
                         <div className="flex flex-col items-center gap-2">
                            <LucideIcon name="CheckCircle" className="h-6 w-6 text-primary" />
                            <Badge variant="outline" className="text-primary border-primary">text-primary</Badge>
                        </div>
                         <div className="flex flex-col items-center gap-2">
                            <LucideIcon name="XCircle" className="h-6 w-6 text-destructive" />
                            <Badge variant="outline" className="text-destructive border-destructive">text-destructive</Badge>
                        </div>
                         <div className="flex flex-col items-center gap-2">
                            <LucideIcon name="Info" className="h-6 w-6 text-accent" />
                            <Badge variant="outline" className="text-accent border-accent">text-accent</Badge>
                        </div>
                         <div className="flex flex-col items-center gap-2">
                            <LucideIcon name="HelpCircle" className="h-6 w-6 text-muted-foreground" />
                            <Badge variant="outline">text-muted-foreground</Badge>
                        </div>
                    </div>
                </div>
                 <pre className="bg-muted dark:bg-black/50 rounded-lg font-code text-sm overflow-x-auto">
                    <code className="block p-4">{codeSnippets.coloring}</code>
                </pre>
            </div>

            <div>
                <h3 className="font-headline text-xl mb-4 pb-2 border-b">Stroke Width</h3>
                <p className="text-muted-foreground mb-4">
                    Icons are line-based and their thickness can be adjusted via the <code>strokeWidth</code> prop. The default value is 2.
                </p>
                <div className="p-6 border rounded-lg bg-card mb-4">
                    <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
                        <div className="flex flex-col items-center gap-2">
                            <LucideIcon name="Package" className="h-8 w-8" strokeWidth={1} />
                            <Badge variant="outline">strokeWidth={1}</Badge>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <LucideIcon name="Package" className="h-8 w-8" strokeWidth={1.5} />
                            <Badge variant="outline">strokeWidth={1.5}</Badge>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <LucideIcon name="Package" className="h-8 w-8" strokeWidth={2} />
                            <Badge variant="outline">strokeWidth={2} (default)</Badge>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <LucideIcon name="Package" className="h-8 w-8" strokeWidth={3} />
                            <Badge variant="outline">strokeWidth={3}</Badge>
                        </div>
                    </div>
                </div>
                 <pre className="bg-muted dark:bg-black/50 rounded-lg font-code text-sm overflow-x-auto">
                    <code className="block p-4">{codeSnippets.stroke}</code>
                </pre>
            </div>
        </div>
    )
}
