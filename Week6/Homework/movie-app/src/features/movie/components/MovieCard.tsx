import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib";
import { Card } from "@/shared";

type MovieCardProps = {
  id: number;
  title: string;
  releaseDate: string;
  overview: string;
  posterUrl: string | null;
  className?: string;
  priority?: boolean;
};

export const MovieCard = ({
  id,
  title,
  releaseDate,
  overview,
  posterUrl,
  className,
  priority = false,
}: MovieCardProps) => {
  return (
    <Link href={`/movies/${id}`} aria-label={`${title} 상세 페이지로 이동`}>
      <Card
        className={cn(
          "w-[240px]",
          "transition duration-200 ease-out",
          "hover:-translate-y-1 hover:shadow-[0_18px_40px_var(--shadow-color)]",
          className,
        )}
      >
        <div className="bg-surface-muted relative aspect-[2/3]">
          {posterUrl ? (
            <Image
              src={posterUrl}
              alt={`${title} poster`}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, 240px"
              className="object-cover"
            />
          ) : (
            <div className="text-muted flex h-full items-center justify-center px-4 text-center text-sm font-medium">
              No Poster
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2 px-3 py-4">
          <h3 className="line-clamp-1 font-bold">{title}</h3>
          <p className="text-muted text-sm font-medium">
            {releaseDate || "개봉일 미정"}
          </p>
          <p
            className={cn(
              "line-clamp-3",
              "text-sm leading-6",
              "text-foreground/80",
            )}
          >
            {overview || "줄거리 정보가 없습니다."}
          </p>
        </div>
      </Card>
    </Link>
  );
};
