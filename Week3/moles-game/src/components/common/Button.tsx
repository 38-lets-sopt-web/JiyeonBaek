interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  bgColor: string;
  textColor: string;
}

const Button = ({ onClick, children, bgColor, textColor }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-5 py-2 text-lg transition ${bgColor} ${textColor}`}
    >
      {children}
    </button>
  );
};

export default Button;
