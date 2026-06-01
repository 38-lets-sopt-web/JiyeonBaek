import { MovieDetailSection } from "./MovieDetailSection";

interface MovieBasicInfoSectionProps {
  items: Array<{
    label: string;
    value: string;
  }>;
}

export const MovieBasicInfoSection = ({
  items,
}: MovieBasicInfoSectionProps) => {
  return (
    <MovieDetailSection title="기본 정보">
      <dl className="divide-border mt-6 divide-y">
        {items.map(({ label, value }) => (
          <div key={label} className="grid gap-3 py-4 sm:grid-cols-[160px_1fr]">
            <dt className="text-muted font-bold">{label}</dt>
            <dd className="text-foreground font-medium">{value}</dd>
          </div>
        ))}
      </dl>
    </MovieDetailSection>
  );
};
