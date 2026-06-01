export interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path?: string | null;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count?: number;
}

export interface MovieDetail extends Movie {
  budget: number;
  genres: Array<{
    id: number;
    name: string;
  }>;
  original_language: string;
  original_title: string;
  production_countries: Array<{
    iso_3166_1: string;
    name: string;
  }>;
  revenue: number;
  runtime: number | null;
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  status: string;
}

export interface MovieListResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface RatingFilter {
  label: string;
  minRating?: number;
  maxRating?: number;
}

export interface MovieListParams extends Omit<RatingFilter, "label"> {
  page: number;
}
