import { forwardRef } from 'react';
import type { SelectHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  children: ReactNode;
}

const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ className, label, error, children, ...props }, ref) => {
    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
        <select
          className={cn(
            'w-full rounded-sm border border-gray-300 bg-white p-3',
            'text-sm placeholder:text-gray-400',
            'focus:border-primary300',
            error && 'border-red-500 focus:border-red-500',
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    );
  },
);

export default Dropdown;
