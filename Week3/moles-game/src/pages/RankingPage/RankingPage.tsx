import type { RankingRecord } from '@/types/ranking';
import RankingHeader from '@/components/ranking/RankingHeader';
import RankingTable from '@/components/ranking/RankingTable';
import { cn } from '@/utils/cn';

interface RankingPageProps {
  records: RankingRecord[];
  onClear: () => void;
}

const RankingPage = ({ records, onClear }: RankingPageProps) => {
  return (
    <section
      className={cn(
        'bg-primary100',
        'flex min-h-0 flex-1 flex-col gap-4 overflow-hidden',
        'rounded-2xl',
        'px-10 py-8',
      )}
    >
      <RankingHeader onClear={onClear} />
      <RankingTable records={records} />
    </section>
  );
};

export default RankingPage;
