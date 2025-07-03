'use client';

import { cn } from "@/lib/utils";

export type TypographyStyle = {
  tag: keyof JSX.IntrinsicElements;
  name: string;
  fontSize: string;
  fontWeight: string | number;
  fontFamily: 'body' | 'headline' | 'code';
};

const fontFamilyClasses = {
    body: 'font-body',
    headline: 'font-headline',
    code: 'font-code'
}

export const TypographyShowcase = ({ styles }: { styles: TypographyStyle[] }) => {
  return (
    <div className="my-6 space-y-4">
      {styles.map(({ tag: Tag, name, fontSize, fontWeight, fontFamily }) => {
        return (
          <div key={name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-4 border rounded-lg">
            <div>
                <Tag 
                    className={cn("m-0 p-0", fontFamilyClasses[fontFamily])}
                    style={{ fontSize: fontSize, fontWeight: fontWeight }}
                >
                    {name}
                </Tag>
            </div>
            <div className="text-sm text-muted-foreground font-mono bg-muted px-2 py-1 rounded-md">
              {fontSize} / {fontWeight} / {fontFamily}
            </div>
          </div>
        );
      })}
    </div>
  );
};
