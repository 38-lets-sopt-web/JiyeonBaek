import { notFound } from "next/navigation";

import { getMovieDetail, MovieDetail } from "@/features/movie";

interface MovieDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const MovieDetailPage = async ({ params }: MovieDetailPageProps) => {
  const { id } = await params;
  const movie = await getMovieDetail(id);

  if (!movie) {
    notFound();
  }

  return <MovieDetail movie={movie} />;
};

export default MovieDetailPage;
