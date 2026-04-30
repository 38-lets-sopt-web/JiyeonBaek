import { cn } from '@/utils/cn';

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  value: string;
  options: readonly DropdownOption[];
  onChange: (value: string) => void;
}

const Dropdown = ({ value, options, onChange }: DropdownProps) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={cn('text-text bg-white', 'rounded-md px-5 py-4', 'text-2xl font-bold')}
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
