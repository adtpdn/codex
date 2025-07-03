'use client';

import LucideIcon from "@/components/lucide-icon";

export type IconInfo = {
  name: string;
  sizes: number[];
};

export const IconographyShowcase = ({ icons }: { icons: IconInfo[] }) => {
  return (
    <div className="my-6 space-y-6">
      {icons.map(({ name, sizes }) => (
        <div key={name} className="p-4 border rounded-lg">
           <h4 className="font-headline text-lg mb-4">{name}</h4>
           <div className="flex flex-wrap items-end gap-6">
            {sizes.map((size) => (
                <div key={size} className="flex flex-col items-center gap-2">
                    <LucideIcon name={name} style={{ width: size, height: size }} />
                    <span className="text-xs text-muted-foreground font-mono">{size}px</span>
                </div>
            ))}
           </div>
        </div>
      ))}
    </div>
  );
};
