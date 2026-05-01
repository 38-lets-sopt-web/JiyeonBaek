import { cn } from '@/utils/cn';

type ValueType = string | number;
type ValueSize = 'large' | 'small';

interface CardProps {
  label: string;
  value: ValueType;
  labelColor?: string;
  valueSize?: ValueSize;
  className?: string;
}

const Card = ({
  label,
  value,
  labelColor = 'text-text',
  valueSize = 'large',
  className,
}: CardProps) => {
  return (
    <article
      className={cn(
        'bg-primary100',
        'px-5 py-6',
        'flex flex-col items-center justify-center',
        'rounded-2xl',
        className,
      )}
    >
      <p className={cn('text-2xl font-medium', labelColor)}>{label}</p>

      <strong
        className={cn('text-text mt-4 font-bold', valueSize === 'large' ? 'text-6xl' : 'text-2xl')}
      >
        {value}
      </strong>
    </article>
  );
};

export default Card;
