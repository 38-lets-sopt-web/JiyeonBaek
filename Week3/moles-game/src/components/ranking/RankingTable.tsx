import type { RankingRecord } from '@/types/ranking';
import { formatDate } from '@/utils/date';
import { cn } from '@/utils/cn';
import { RANKING_MESSAGES, RANKING_TABLE_COLUMNS } from '@/constants/ranking';

interface RankingTableProps {
  records: RankingRecord[];
}

const tdStyle = 'py-4 text-center text-lg';

const RankingTable = ({ records }: RankingTableProps) => {
  return (
    <div className="flex-1 overflow-auto rounded-md bg-white/40">
      <table className="w-full table-fixed border-collapse">
        <thead className="bg-primary200 sticky top-0 z-10">
          <tr>
            {RANKING_TABLE_COLUMNS.map((col) => (
              <th key={col} className="py-4 text-center text-xl font-semibold">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {records.length === 0 ? (
            <tr>
              <td colSpan={4} className={cn(tdStyle, 'py-8 text-lg text-gray-500')}>
                {RANKING_MESSAGES.EMPTY_RECORD}
              </td>
            </tr>
          ) : (
            records.map((record, index) => (
              <tr key={record.id} className="border-t border-white/40">
                <td className={tdStyle}>{index + 1}</td>
                <td className={tdStyle}>Level {record.level}</td>
                <td className={tdStyle}>{record.score}점</td>
                <td className={tdStyle}>{formatDate(record.successTime)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RankingTable;
