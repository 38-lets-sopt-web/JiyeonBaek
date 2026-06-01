import type { RatingFilter } from "@/features/movie/types";

const TMDB_IMAGE_BASE_URL = process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL;

if (!TMDB_IMAGE_BASE_URL) {
  throw new Error("NEXT_PUBLIC_TMDB_IMAGE_BASE_URL is not defined.");
}

export const MOVIE_IMAGE_BASE_URL = `${TMDB_IMAGE_BASE_URL}/w500`;

export const MOVIE_BACKDROP_BASE_URL = `${TMDB_IMAGE_BASE_URL}/w1280`;

export const RATING_FILTERS: Record<string, RatingFilter> = {
  all: {
    label: "전체 별점",
  },
  "1": {
    label: "1점 대",
    minRating: 1,
    maxRating: 2,
  },
  "2": {
    label: "2점 대",
    minRating: 2,
    maxRating: 3,
  },
  "3": {
    label: "3점 대",
    minRating: 3,
    maxRating: 4,
  },
  "4": {
    label: "4점 대",
    minRating: 4,
    maxRating: 5,
  },
  "5": {
    label: "5점 대",
    minRating: 5,
    maxRating: 6,
  },
  "6": {
    label: "6점 대",
    minRating: 6,
    maxRating: 7,
  },
  "7": {
    label: "7점 대",
    minRating: 7,
    maxRating: 8,
  },
  "8": {
    label: "8점 대",
    minRating: 8,
    maxRating: 9,
  },
  "9": {
    label: "9점 대",
    minRating: 9,
    maxRating: 10,
  },
  "10": {
    label: "10점 대",
    minRating: 10,
    maxRating: 10,
  },
};
