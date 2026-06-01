import { NextResponse } from "next/server";

import { getDiscoverMovies } from "@/features/movie/api/movies";
import { getMovieListRouteParams } from "@/features/movie/api/routeParams";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const params = getMovieListRouteParams(searchParams);

  try {
    const data = await getDiscoverMovies(params);

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { message: "Failed to fetch movies." },
      { status: 500 },
    );
  }
};
