interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  bgColor: string;
  textColor: string;
  className?: string;
}

const Button = ({ onClick, children, bgColor, textColor, className }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-5 py-2 text-lg transition ${bgColor} ${textColor} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
