import type { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/shared/utils/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-3',
        'h-[88px] rounded-md bg-white p-4',
        'cursor-pointer transition hover:-translate-y-1',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
