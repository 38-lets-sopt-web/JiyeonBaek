import type { MovieDetail } from "@/features/movie/types";

import { getMovieApiClient } from "./client";

export const getMovieDetail = async (id: string) => {
  try {
    const { data } = await getMovieApiClient().get<MovieDetail>(
      `/movie/${id}`,
      {
        params: {
          language: "ko-KR",
        },
      },
    );

    return data;
  } catch {
    return null;
  }
};
