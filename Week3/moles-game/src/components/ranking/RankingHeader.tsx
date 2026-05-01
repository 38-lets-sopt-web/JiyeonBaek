import Button from '@/components/common/Button';
import { RANKING_MESSAGES } from '@/constants/ranking';

interface RankingHeaderProps {
  onClear: () => void;
}

const RankingHeader = ({ onClear }: RankingHeaderProps) => {
  const handleClear = () => {
    const isConfirmed = window.confirm(RANKING_MESSAGES.CONFIRM_CLEAR);
    if (!isConfirmed) {
      return;
    }

    onClear();
  };

  return (
    <div className="flex items-center justify-between">
      <h2 className="text-text text-3xl font-bold">랭킹 보드</h2>
      <Button onClick={handleClear} bgColor="bg-primary300" textColor="text-white">
        기록 초기화
      </Button>
    </div>
  );
};

export default RankingHeader;
