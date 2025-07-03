'use client';

import { icons } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

type LucideIconProps = LucideProps & {
  name: string;
};

const LucideIcon = ({ name, ...props }: LucideIconProps) => {
  const Icon = icons[name as keyof typeof icons];

  if (!Icon) {
    // Fallback to a default icon if name is not found
    const FallbackIcon = icons['HelpCircle'];
    if (FallbackIcon) {
      return <FallbackIcon {...props} />;
    }
    // Return null to prevent crashing if the fallback is also missing
    return null;
  }

  return <Icon {...props} />;
};

export default LucideIcon;
