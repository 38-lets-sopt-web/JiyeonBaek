import { cn } from "@/lib";
import { LoadingIndicator } from "@/shared";

interface MovieExplorerStatusProps {
  actionLabel?: string;
  isLoading?: boolean;
  message?: string;
  onAction?: () => void;
}

export const MovieExplorerStatus = ({
  actionLabel,
  isLoading = false,
  message,
  onAction,
}: MovieExplorerStatusProps) => {
  return (
    <main className="bg-background flex min-h-screen justify-center px-6 py-14">
      <div className="flex w-full max-w-[1032px] flex-col gap-8">
        <h1 className="text-foreground text-5xl font-black tracking-tight">
          Movie Explorer
        </h1>

        <div
          className={cn(
            "border-border bg-surface w-full rounded-lg border",
            "px-4 py-4",
          )}
        >
          {isLoading ? <LoadingIndicator /> : null}
          {!isLoading && message ? (
            <p className="text-muted text-sm font-medium">{message}</p>
          ) : null}
          {onAction ? (
            <button
              type="button"
              onClick={onAction}
              className={cn(
                "mt-4 h-11 rounded-md px-5",
                "bg-primary text-primary-foreground text-sm font-bold",
              )}
            >
              {actionLabel}
            </button>
          ) : null}
        </div>
      </div>
    </main>
  );
};
