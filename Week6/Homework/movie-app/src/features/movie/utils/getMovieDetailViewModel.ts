import {
  MOVIE_BACKDROP_BASE_URL,
  MOVIE_IMAGE_BASE_URL,
} from "@/features/movie/constants";
import type { MovieDetail } from "@/features/movie/types";

import { formatCurrency, formatRuntime, getMovieImageUrl } from "./formatMovie";

export const getMovieDetailViewModel = (movie: MovieDetail) => {
  const productionCountries = movie.production_countries
    .map((country) => country.name)
    .join(", ");
  const spokenLanguages = movie.spoken_languages
    .map((language) => language.english_name)
    .join(", ");

  return {
    backdropUrl: getMovieImageUrl(MOVIE_BACKDROP_BASE_URL, movie.backdrop_path),
    basicInfoItems: [
      { label: "원제", value: movie.original_title },
      { label: "원어", value: movie.original_language },
      { label: "제작 국가", value: productionCountries || "정보 없음" },
      { label: "사용 언어", value: spokenLanguages || "정보 없음" },
      { label: "예산", value: formatCurrency(movie.budget) },
      { label: "수익", value: formatCurrency(movie.revenue) },
    ],
    posterUrl: getMovieImageUrl(MOVIE_IMAGE_BASE_URL, movie.poster_path),
    runtime: formatRuntime(movie.runtime),
  };
};
