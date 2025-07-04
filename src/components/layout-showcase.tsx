'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const LayoutShowcase = () => {
    const codeSnippet = `
import { 
  Card, CardHeader, CardTitle, CardDescription, 
  CardContent, CardFooter 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

<Card className="w-full max-w-sm">
  <CardHeader>
    <CardTitle>Card Component</CardTitle>
    <CardDescription>A versatile layout component.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is the main content of the card.</p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="ghost">Learn More</Button>
    <Button>Get Started</Button>
  </CardFooter>
</Card>
    `.trim();

    return (
        <div className="my-6 space-y-8">
            <div>
                <h3 className="font-headline text-xl mb-4 pb-2 border-b">Card Component</h3>
                <p className="text-muted-foreground mb-4">The Card component is a container for grouping related content. It consists of a header, content, and footer, providing a clear and organized structure. It's ideal for dashboards, profiles, and item listings.</p>
                <div className="p-6 border rounded-lg bg-card mb-4 flex justify-center">
                    <Card className="w-full max-w-sm">
                        <CardHeader>
                            <CardTitle>Card Component</CardTitle>
                            <CardDescription>A versatile layout component.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>This is the main content of the card. Use it to group related information.</p>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant="ghost">Learn More</Button>
                            <Button>Get Started</Button>
                        </CardFooter>
                    </Card>
                </div>
                <pre className="bg-muted dark:bg-black/50 rounded-lg font-code text-sm overflow-x-auto">
                    <code className="block p-4">{codeSnippet}</code>
                </pre>
            </div>
        </div>
    )
}
