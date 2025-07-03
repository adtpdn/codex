'use client';

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const ButtonShowcase = () => {
    return (
        <div className="my-6 p-4 border rounded-lg space-y-6">
            <div>
                <h4 className="font-headline text-lg mb-4">Variants</h4>
                <div className="flex flex-wrap gap-4 items-center">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                </div>
            </div>
            <div>
                <h4 className="font-headline text-lg mb-4">Sizes</h4>
                 <div className="flex flex-wrap gap-4 items-end">
                    <Button size="lg">Large</Button>
                    <Button size="default">Default</Button>
                    <Button size="sm">Small</Button>
                    <Button size="icon"><Plus className="w-4 h-4" /></Button>
                 </div>
            </div>
        </div>
    )
}
