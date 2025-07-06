"use client"

import React from 'react';

interface ScrollAreaProps extends React.HTMLProps<HTMLDivElement> {
  orientation?: 'vertical' | 'horizontal';
}

export const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ className, children, style, orientation = 'vertical', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={className}
        style={{
          overflow: 'auto',
          height: '100%',
          width: '100%',
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ScrollArea.displayName = 'ScrollArea';