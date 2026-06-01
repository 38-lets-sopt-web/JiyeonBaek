import { cn } from '@/utils/cn';

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  value: string;
  options: readonly DropdownOption[];
  onChange: (value: string) => void;
  disabled?: boolean;
}

const Dropdown = ({ value, options, onChange, disabled = false }: DropdownProps) => {
  return (
    <select
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
      className={cn('bg-white', 'rounded-md px-5 py-4', 'text-2xl font-bold')}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
