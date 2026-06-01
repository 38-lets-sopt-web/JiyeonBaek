import { cn } from "@/lib";

interface LoadingIndicatorProps {
  className?: string;
  size?: "sm" | "md";
}

export const LoadingIndicator = ({
  className,
  size = "md",
}: LoadingIndicatorProps) => {
  const isSmall = size === "sm";

  return (
    <div
      role="status"
      aria-label="loading"
      className={cn(
        "flex items-center justify-center gap-3",
        isSmall ? "py-2" : "py-10",
        className,
      )}
    >
      <span
        className={cn(
          "border-border border-t-primary animate-spin rounded-full border-2",
          isSmall ? "size-5" : "size-8",
        )}
      />
    </div>
  );
};
