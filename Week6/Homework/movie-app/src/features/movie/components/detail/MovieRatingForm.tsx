"use client";

import type { ChangeEventHandler } from "react";

import { useMovieRating } from "@/features/movie/hooks";
import { cn } from "@/lib";

import { MovieDetailSection } from "./MovieDetailSection";

interface MovieRatingFormProps {
  movieId: number;
}

interface MovieRatingFormViewProps {
  message: string;
  rating: string;
  onDelete: () => void;
  onRatingChange: ChangeEventHandler<HTMLInputElement>;
  onSave: () => void;
}

const MovieRatingFormView = ({
  message,
  rating,
  onDelete,
  onRatingChange,
  onSave,
}: MovieRatingFormViewProps) => {
  return (
    <MovieDetailSection title="별점 남기기">
      <div className="mt-6 flex flex-col gap-3">
        <label htmlFor="movie-rating" className="text-sm font-bold">
          0.5 ~ 10.0
        </label>
        <input
          id="movie-rating"
          type="number"
          min="0.5"
          max="10"
          step="0.5"
          value={rating}
          onChange={onRatingChange}
          className={cn(
            "border-border bg-surface h-12 rounded-md border px-4",
            "text-foreground text-base font-medium",
            "transition-colors outline-none",
            "focus:border-primary",
          )}
        />
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onSave}
            className={cn(
              "h-11 rounded-md px-5",
              "bg-primary text-primary-foreground text-sm font-bold",
            )}
          >
            별점 저장
          </button>
          <button
            type="button"
            onClick={onDelete}
            className={cn(
              "border-border h-11 rounded-md border px-5",
              "text-muted text-sm font-bold",
            )}
          >
            별점 삭제하기
          </button>
        </div>
        {message ? (
          <p className="text-muted text-sm font-bold">{message}</p>
        ) : null}
      </div>
    </MovieDetailSection>
  );
};

export const MovieRatingForm = ({ movieId }: MovieRatingFormProps) => {
  const { handleDelete, handleRatingChange, handleSave, message, rating } =
    useMovieRating({ movieId });

  return (
    <MovieRatingFormView
      message={message}
      rating={rating}
      onDelete={handleDelete}
      onRatingChange={handleRatingChange}
      onSave={handleSave}
    />
  );
};
