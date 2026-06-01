import type { MovieListParams } from "@/features/movie/types";

const getValidPage = (page: string | null) => {
  const pageNumber = Number(page);

  if (!Number.isInteger(pageNumber) || pageNumber < 1) {
    return 1;
  }

  return pageNumber;
};

const getValidRating = (rating: string | null) => {
  const ratingNumber = Number(rating);

  if (!Number.isFinite(ratingNumber) || ratingNumber < 0 || ratingNumber > 10) {
    return undefined;
  }

  return ratingNumber;
};

export const getMovieListRouteParams = (
  searchParams: URLSearchParams,
): MovieListParams => {
  return {
    maxRating: getValidRating(searchParams.get("maxRating")),
    minRating: getValidRating(searchParams.get("minRating")),
    page: getValidPage(searchParams.get("page")),
  };
};
