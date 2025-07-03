'use client';

import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

export type ColorInfo = {
  name: string;
  hex: string;
};

// Heuristic to determine if a color is light or dark
const isColorLight = (hex: string) => {
    if (hex.startsWith('#') && (hex.length === 4 || hex.length === 7)) {
        let color = hex.substring(1);
        if (color.length === 3) {
            color = color.split('').map(c => c + c).join('');
        }
        const rgb = parseInt(color, 16);
        const r = (rgb >> 16) & 0xff;
        const g = (rgb >> 8) & 0xff;
        const b = (rgb >> 0) & 0xff;
        const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        return luma > 160;
    }
    return true;
};

export const ColorPalette = ({ colors }: { colors: ColorInfo[] }) => {
    const { toast } = useToast();

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        toast({
            description: `Copied "${text}" to clipboard.`,
        });
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
            {colors.map(({ name, hex }) => {
                const textColor = isColorLight(hex) ? 'text-black' : 'text-white';
                return (
                    <div key={name} className="flex flex-col group rounded-lg overflow-hidden border">
                        <div 
                            className="h-24 flex items-end p-4"
                            style={{ backgroundColor: hex }}
                        >
                            <span className={cn("font-bold text-lg", textColor)}>{name}</span>
                        </div>
                        <div className="bg-card p-4 flex justify-between items-center">
                            <span className="font-mono text-sm text-muted-foreground">{hex}</span>
                            <button
                                onClick={() => handleCopy(hex)}
                                className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground"
                                aria-label={`Copy hex value ${hex}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
