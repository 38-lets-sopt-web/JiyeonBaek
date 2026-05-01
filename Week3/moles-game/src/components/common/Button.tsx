import { cn } from '@/utils/cn';
import type { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  bgColor?: string;
  textColor?: string;
}

const Button = ({
  children,
  bgColor = 'bg-primary200',
  textColor = 'text-text',
  className,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        'rounded-full px-5 py-2 text-lg transition',
        bgColor,
        textColor,
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
