import Link from "next/link";

import type { MovieDetail as MovieDetailType } from "@/features/movie/types";
import { getMovieDetailViewModel } from "@/features/movie/utils";

import { MovieBasicInfoSection } from "./MovieBasicInfoSection";
import { MovieDetailSummary } from "./MovieDetailSummary";
import { MovieOverviewSection } from "./MovieOverviewSection";
import { MovieRatingForm } from "./MovieRatingForm";

interface MovieDetailProps {
  movie: MovieDetailType;
}

export const MovieDetail = ({ movie }: MovieDetailProps) => {
  const { backdropUrl, basicInfoItems, posterUrl, runtime } =
    getMovieDetailViewModel(movie);

  return (
    <main className="bg-background flex min-h-screen justify-center px-6 py-12">
      <div className="flex w-full max-w-[1032px] flex-col gap-8">
        <Link href="/" className="text-foreground text-base font-black">
          &larr; 목록으로 돌아가기
        </Link>

        <MovieDetailSummary
          movie={movie}
          posterUrl={posterUrl}
          backdropUrl={backdropUrl}
          runtime={runtime}
        />

        <MovieOverviewSection overview={movie.overview} />

        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          <MovieBasicInfoSection items={basicInfoItems} />
          <MovieRatingForm movieId={movie.id} />
        </div>
      </div>
    </main>
  );
};
