import { cn } from '@/shared/utils/cn';
import type { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'>;

const Button = ({ children, className, type = 'button', ...props }: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        'w-full rounded-sm py-3',
        'text-text hover:text-primary100 text-center text-xl font-medium disabled:text-gray-500',
        'bg-primary200 enabled:hover:bg-primary300 disabled:bg-gray-300 disabled:opacity-70',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
