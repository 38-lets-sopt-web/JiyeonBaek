import { cn } from "@/lib";

type MovieCardListProps = React.ComponentProps<"section">;

export const MovieCardList = ({ className, ...props }: MovieCardListProps) => {
  return (
    <section
      className={cn(
        "mx-auto w-full max-w-[1032px] gap-6",
        "grid justify-center",
        "grid-cols-[repeat(1,240px)]",
        "sm:grid-cols-[repeat(2,240px)]",
        "lg:grid-cols-[repeat(3,240px)]",
        "xl:grid-cols-[repeat(4,240px)]",
        className,
      )}
      {...props}
    />
  );
};
