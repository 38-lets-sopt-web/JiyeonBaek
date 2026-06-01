"use client";

import type { ChangeEventHandler } from "react";

import { cn } from "@/lib";

interface MovieRatingFilterProps {
  value: string;
  options: Array<{
    label: string;
    value: string;
  }>;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  className?: string;
}

export const MovieRatingFilter = ({
  value,
  options,
  onChange,
  className,
}: MovieRatingFilterProps) => {
  return (
    <div
      className={cn(
        "border-border bg-surface w-full rounded-lg border",
        "px-4 py-4",
        className,
      )}
    >
      <select
        value={value}
        onChange={onChange}
        aria-label="별점 필터"
        className={cn(
          "border-border bg-surface h-12 w-[180px] rounded-md border px-4",
          "text-foreground text-sm font-bold",
          "transition-colors outline-none",
          "focus:border-primary",
        )}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
