"use client";

import { useMovieExplorer } from "@/features/movie/hooks";

import { MovieExplorerView } from "./MovieExplorerView";

export const MovieExplorerContent = () => {
  const {
    isFetchingNextPage,
    loadMoreRef,
    movieCards,
    ratingOptions,
    selectedRating,
    handleRatingChange,
  } = useMovieExplorer();

  return (
    <MovieExplorerView
      isFetchingNextPage={isFetchingNextPage}
      loadMoreRef={loadMoreRef}
      movieCards={movieCards}
      ratingOptions={ratingOptions}
      selectedRating={selectedRating}
      onRatingChange={handleRatingChange}
    />
  );
};
