import { infiniteQueryOptions } from "@tanstack/react-query";

import type { RatingFilter } from "@/features/movie/types";

import { getMovies } from "./movies";
import { movieQueryKeys } from "./queryKeys";

export const moviesInfiniteQueryOptions = (ratingFilter: RatingFilter) => {
  return infiniteQueryOptions({
    queryKey: movieQueryKeys.list(ratingFilter),
    queryFn: ({ pageParam }) =>
      getMovies({
        page: pageParam,
        minRating: ratingFilter.minRating,
        maxRating: ratingFilter.maxRating,
      }),
    initialPageParam: 1,
    staleTime: 1000 * 60 * 5,
    getNextPageParam: (lastPage) => {
      if (lastPage.page >= lastPage.total_pages) {
        return undefined;
      }

      return lastPage.page + 1;
    },
  });
};
