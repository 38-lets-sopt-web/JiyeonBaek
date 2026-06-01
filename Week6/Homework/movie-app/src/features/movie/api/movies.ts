import type {
  MovieListParams,
  MovieListResponse,
} from "@/features/movie/types";

import { getMovieApiClient } from "./client";

type GetMoviesParams = Partial<MovieListParams>;

export const getMovies = async ({
  page = 1,
  minRating,
  maxRating,
}: GetMoviesParams) => {
  const params = new URLSearchParams({
    page: String(page),
  });

  if (minRating !== undefined) {
    params.set("minRating", String(minRating));
  }

  if (maxRating !== undefined) {
    params.set("maxRating", String(maxRating));
  }

  const response = await fetch(`/api/movies?${params.toString()}`);

  if (!response.ok) {
    throw new Error("Failed to fetch movies.");
  }

  return response.json() as Promise<MovieListResponse>;
};

export const getDiscoverMovies = async ({
  page,
  minRating,
  maxRating,
}: MovieListParams) => {
  const { data } = await getMovieApiClient().get<MovieListResponse>(
    "/discover/movie",
    {
      params: {
        include_adult: false,
        language: "ko-KR",
        page,
        sort_by: "popularity.desc",
        ...(minRating !== undefined ? { "vote_average.gte": minRating } : {}),
        ...(maxRating !== undefined ? { "vote_average.lte": maxRating } : {}),
      },
    },
  );

  return data;
};
