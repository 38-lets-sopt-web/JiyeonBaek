import { forwardRef, useState } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import EyeOffIcon from '@/assets/icons/ic-eye-off.svg?react';
import EyeIcon from '@/assets/icons/ic-eye-on.svg?react';
import { cn } from '@/shared/utils/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  rightElement?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, rightElement, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const isPasswordType = type === 'password';
    const inputType = isPasswordType && isPasswordVisible ? 'text' : type;
    const hasRightElement = Boolean(rightElement);

    const handlePasswordVisibility = () => {
      setIsPasswordVisible((prev) => !prev);
    };

    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && <label className="text-sm font-medium">{label}</label>}
        <div className="relative flex items-center">
          <input
            type={inputType}
            className={cn(
              'w-full rounded-sm border border-gray-300 bg-white p-3',
              'text-sm placeholder:text-gray-400',
              'focus:border-primary300',
              error && 'border-red-500 focus:border-red-500',
              (isPasswordType || hasRightElement) && 'pr-10',
              className,
            )}
            ref={ref}
            {...props}
          />
          {isPasswordType && !hasRightElement && (
            <button
              type="button"
              className="absolute right-3"
              onClick={handlePasswordVisibility}
              aria-label={isPasswordVisible ? '비밀번호 숨기기' : '비밀번호 표시'}
            >
              {isPasswordVisible ? <EyeOffIcon width={15} /> : <EyeIcon width={15} />}
            </button>
          )}
          {rightElement && !isPasswordType && (
            <div className="absolute right-3">{rightElement}</div>
          )}
        </div>
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    );
  },
);

export default Input;
