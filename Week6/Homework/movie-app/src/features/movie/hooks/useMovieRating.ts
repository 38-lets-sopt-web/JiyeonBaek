"use client";

import type { ChangeEventHandler } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";

interface UseMovieRatingParams {
  movieId: number;
}

const MIN_RATING = 0.5;
const MAX_RATING = 10;

export const useMovieRating = ({ movieId }: UseMovieRatingParams) => {
  const [rating, setRating] = useState("");
  const [message, setMessage] = useState("");
  const storageKey = useMemo(() => `movie-rating-${movieId}`, [movieId]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setRating(localStorage.getItem(storageKey) ?? "");
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [storageKey]);

  const handleRatingChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setRating(event.target.value);
    },
    [],
  );

  const handleSave = useCallback(() => {
    const ratingValue = Number(rating);
    const isValidRating =
      Number.isFinite(ratingValue) &&
      ratingValue >= MIN_RATING &&
      ratingValue <= MAX_RATING;

    if (!isValidRating) {
      setMessage("0.5부터 10.0 사이의 별점만 저장할 수 있습니다.");
      return;
    }

    localStorage.setItem(storageKey, String(ratingValue));
    setRating(String(ratingValue));
    setMessage("별점이 저장되었습니다.");
  }, [rating, storageKey]);

  const handleDelete = useCallback(() => {
    localStorage.removeItem(storageKey);
    setRating("");
    setMessage("별점이 삭제되었습니다.");
  }, [storageKey]);

  return {
    handleDelete,
    handleRatingChange,
    handleSave,
    message,
    rating,
  };
};
