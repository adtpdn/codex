
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
          <div key={name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 border rounded-lg">
            <div className="flex-1">
                <Tag 
                    className={cn("m-0 p-0", fontFamilyClasses[fontFamily])}
                    style={{ fontSize: fontSize, fontWeight: fontWeight }}
                >
                    {name}
                </Tag>
            </div>
            <div className="flex-shrink-0 bg-muted px-3 py-2 rounded-md">
                <dl className="text-xs font-mono text-muted-foreground grid grid-cols-3 gap-x-4">
                    <div className="flex flex-col items-center">
                        <dt className="font-semibold text-foreground">Size</dt>
                        <dd>{fontSize}</dd>
                    </div>
                    <div className="flex flex-col items-center">
                        <dt className="font-semibold text-foreground">Weight</dt>
                        <dd>{fontWeight}</dd>
                    </div>
                    <div className="flex flex-col items-center">
                        <dt className="font-semibold text-foreground">Family</dt>
                        <dd>{fontFamily}</dd>
                    </div>
                </dl>
            </div>
          </div>
        );
      })}
    </div>
  );
};
