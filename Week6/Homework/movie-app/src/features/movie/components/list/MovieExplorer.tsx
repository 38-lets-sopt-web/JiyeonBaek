"use client";

import { QueryErrorResetBoundary } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import { ErrorBoundary } from "@/shared";

import { MovieExplorerStatus } from "./MovieExplorerStatus";

const MovieExplorerContent = dynamic(
  () =>
    import("./MovieExplorerContent").then((module) => ({
      default: module.MovieExplorerContent,
    })),
  {
    ssr: false,
  },
);

export const MovieExplorer = () => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallback={({ resetErrorBoundary }) => (
            <MovieExplorerStatus
              message="영화를 불러오지 못했습니다."
              actionLabel="다시 시도"
              onAction={resetErrorBoundary}
            />
          )}
        >
          <Suspense fallback={<MovieExplorerStatus isLoading />}>
            <MovieExplorerContent />
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};
