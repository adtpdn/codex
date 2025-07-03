'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const LayoutShowcase = () => {
    return (
        <div className="my-6 p-4 border rounded-lg flex flex-wrap gap-4">
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
    )
}
