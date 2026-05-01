import { cn } from '@/utils/cn';

interface HeaderProps {
  title: string;
  children?: React.ReactNode;
}

const Header = ({ title, children }: HeaderProps) => {
  return (
    <header
      className={cn(
        'bg-primary100',
        'flex w-full items-center justify-between',
        'rounded-2xl',
        'px-8 py-6',
      )}
    >
      <div className="flex items-center gap-10">
        <h1 className="text-3xl font-bold">{title}</h1>
        {children}
      </div>
    </header>
  );
};

export default Header;
