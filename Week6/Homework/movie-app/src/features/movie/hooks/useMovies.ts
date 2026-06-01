"use client";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { moviesInfiniteQueryOptions } from "@/features/movie/api";
import type { RatingFilter } from "@/features/movie/types";

interface UseMoviesParams {
  ratingFilter: RatingFilter;
}

export const useMovies = ({ ratingFilter }: UseMoviesParams) => {
  return useSuspenseInfiniteQuery(moviesInfiniteQueryOptions(ratingFilter));
};
