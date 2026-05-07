import { cn } from '@/shared/utils/cn';
import type { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
}

const Tag = ({ children }: TagProps) => {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full',
        'bg-primary200',
        'px-2 py-1',
        'text-sm font-medium',
      )}
    >
      {children}
    </div>
  );
};

export default Tag;
