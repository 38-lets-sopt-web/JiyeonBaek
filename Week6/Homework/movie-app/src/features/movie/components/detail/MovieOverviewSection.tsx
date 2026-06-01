import { MovieDetailSection } from "./MovieDetailSection";

interface MovieOverviewSectionProps {
  overview: string;
}

export const MovieOverviewSection = ({
  overview,
}: MovieOverviewSectionProps) => {
  return (
    <MovieDetailSection title="줄거리">
      <p className="text-foreground/80 mt-5 text-base leading-8">
        {overview || "줄거리 정보가 없습니다."}
      </p>
    </MovieDetailSection>
  );
};
