import { cn } from "@/lib";

type CardProps = React.ComponentProps<"article">;

export const Card = ({ className, ...props }: CardProps) => {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-lg",
        "bg-surface text-foreground",
        "shadow-[0_14px_32px_var(--shadow-color)]",
        className,
      )}
      {...props}
    />
  );
};
