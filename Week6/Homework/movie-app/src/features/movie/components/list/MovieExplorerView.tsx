import type { ChangeEventHandler, RefObject } from "react";

import { LoadingIndicator } from "@/shared";

import { MovieCard } from "./MovieCard";
import { MovieCardList } from "./MovieCardList";
import { MovieRatingFilter } from "./MovieRatingFilter";

interface RatingOption {
  value: string;
  label: string;
}

interface MovieCardItem {
  id: number;
  title: string;
  releaseDate: string;
  overview: string;
  posterUrl: string | null;
  priority: boolean;
}

interface MovieExplorerViewProps {
  isFetchingNextPage: boolean;
  loadMoreRef: RefObject<HTMLDivElement | null>;
  movieCards: MovieCardItem[];
  ratingOptions: RatingOption[];
  selectedRating: string;
  onRatingChange: ChangeEventHandler<HTMLSelectElement>;
}

export const MovieExplorerView = ({
  isFetchingNextPage,
  loadMoreRef,
  movieCards,
  ratingOptions,
  selectedRating,
  onRatingChange,
}: MovieExplorerViewProps) => {
  return (
    <main className="bg-background flex min-h-screen justify-center px-6 py-14">
      <div className="flex w-full max-w-[1032px] flex-col gap-8">
        <h1 className="text-foreground text-5xl font-black tracking-tight">
          Movie Explorer
        </h1>

        <MovieRatingFilter
          value={selectedRating}
          options={ratingOptions}
          onChange={onRatingChange}
        />

        {movieCards.length === 0 ? (
          <p className="text-muted text-sm font-medium">
            표시할 영화가 없습니다.
          </p>
        ) : null}

        <MovieCardList>
          {movieCards.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              releaseDate={movie.releaseDate}
              overview={movie.overview}
              posterUrl={movie.posterUrl}
              priority={movie.priority}
            />
          ))}
        </MovieCardList>

        <div ref={loadMoreRef} className="h-8" />

        {isFetchingNextPage ? <LoadingIndicator size="sm" /> : null}
      </div>
    </main>
  );
};
