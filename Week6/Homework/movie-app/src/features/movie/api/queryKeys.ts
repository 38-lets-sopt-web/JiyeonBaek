import type { RatingFilter } from "@/features/movie/types";

export const movieQueryKeys = {
  all: ["movies"] as const,
  lists: () => [...movieQueryKeys.all, "list"] as const,
  list: (ratingFilter: RatingFilter) =>
    [
      ...movieQueryKeys.lists(),
      {
        maxRating: ratingFilter.maxRating,
        minRating: ratingFilter.minRating,
      },
    ] as const,
};
