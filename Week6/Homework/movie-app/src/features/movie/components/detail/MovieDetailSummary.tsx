import Image from "next/image";

import type { MovieDetail } from "@/features/movie/types";
import { cn } from "@/lib";

interface MovieDetailSummaryProps {
  movie: MovieDetail;
  posterUrl: string | null;
  backdropUrl: string | null;
  runtime: string;
}

interface MovieStatItemProps {
  label: string;
  value: string;
}

const MovieStatItem = ({ label, value }: MovieStatItemProps) => {
  return (
    <div className="border-border rounded-lg border p-5">
      <p className="text-muted text-sm font-bold">{label}</p>
      <p className="mt-3 text-xl font-black">{value}</p>
    </div>
  );
};

export const MovieDetailSummary = ({
  movie,
  posterUrl,
  backdropUrl,
  runtime,
}: MovieDetailSummaryProps) => {
  return (
    <section className="bg-surface overflow-hidden rounded-lg shadow-[0_14px_32px_var(--shadow-color)]">
      <div className="bg-surface-muted relative aspect-[21/8]">
        {backdropUrl ? (
          <Image
            src={backdropUrl}
            alt={`${movie.title} backdrop`}
            fill
            priority
            sizes="(max-width: 1100px) 100vw, 1032px"
            className="object-cover"
          />
        ) : null}
      </div>

      <div className="grid gap-8 p-6 md:grid-cols-[280px_1fr] md:p-8">
        <div className="bg-surface-muted overflow-hidden rounded-lg">
          {posterUrl ? (
            <Image
              src={posterUrl}
              alt={`${movie.title} poster`}
              width={280}
              height={420}
              className="h-auto w-full object-cover"
            />
          ) : (
            <div className="text-muted flex aspect-[2/3] items-center justify-center text-sm font-medium">
              No Poster
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-muted text-lg font-black">
              {movie.release_date || "개봉일 미정"}
            </p>
            <h1 className="text-foreground text-5xl font-black tracking-tight">
              {movie.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className={cn(
                    "rounded-full border px-4 py-2",
                    "border-border",
                    "text-sm font-bold",
                  )}
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <MovieStatItem
              label="평점"
              value={`${movie.vote_average.toFixed(1)} / 10`}
            />
            <MovieStatItem
              label="투표 수"
              value={movie.vote_count?.toLocaleString() ?? "0"}
            />
            <MovieStatItem label="상영 시간" value={runtime} />
            <MovieStatItem label="상태" value={movie.status} />
          </div>
        </div>
      </div>
    </section>
  );
};
