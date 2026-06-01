"use client";

import type { ChangeEventHandler } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  MOVIE_IMAGE_BASE_URL,
  RATING_FILTERS,
} from "@/features/movie/constants";
import { getMovieImageUrl } from "@/features/movie/utils";

import { useMovies } from "./useMovies";

export const useMovieExplorer = () => {
  const [selectedRating, setSelectedRating] = useState("all");
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const ratingFilter = RATING_FILTERS[selectedRating];
  const ratingOptions = useMemo(
    () =>
      Object.entries(RATING_FILTERS).map(([value, filter]) => ({
        value,
        label: filter.label,
      })),
    [],
  );

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useMovies({
    ratingFilter,
  });

  const handleRatingChange: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (event) => {
      setSelectedRating(event.target.value);
    },
    [],
  );

  const movieCards = useMemo(() => {
    const movies = data.pages.flatMap((page) => page.results);

    return movies.map((movie, index) => ({
      id: movie.id,
      title: movie.title,
      releaseDate: movie.release_date,
      overview: movie.overview,
      posterUrl: getMovieImageUrl(MOVIE_IMAGE_BASE_URL, movie.poster_path),
      priority: index < 4,
    }));
  }, [data]);

  useEffect(() => {
    const target = loadMoreRef.current;

    if (!target || !hasNextPage) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        rootMargin: "320px",
      },
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return {
    isFetchingNextPage,
    loadMoreRef,
    movieCards,
    ratingOptions,
    selectedRating,
    handleRatingChange,
  };
};
