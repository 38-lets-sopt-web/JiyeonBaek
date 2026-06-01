import type { ReactNode } from "react";

import { cn } from "@/lib";

interface MovieDetailSectionProps {
  children: ReactNode;
  title: string;
  className?: string;
}

export const MovieDetailSection = ({
  children,
  title,
  className,
}: MovieDetailSectionProps) => {
  return (
    <section
      className={cn(
        "bg-surface rounded-lg",
        "px-6 py-7",
        "shadow-[0_14px_32px_var(--shadow-color)]",
        className,
      )}
    >
      <h2 className="text-foreground text-2xl font-black">{title}</h2>
      {children}
    </section>
  );
};
