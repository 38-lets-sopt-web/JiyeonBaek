import { cn } from '@/utils/cn';
import molesImage from '@/assets/images/moles.webp';
import bombImage from '@/assets/images/moles_bomb.webp';
import type { HoleType } from '@/types/game';

interface HoleCellProps {
  index: number;
  holeType: HoleType;
  holeSize: string;
  onClick: (index: number) => void;
}

const HoleCell = ({ index, holeType, holeSize, onClick }: HoleCellProps) => {
  const renderInner = () => {
    if (holeType === 'mole' || holeType === 'mole-hit') {
      return (
        <img
          src={molesImage}
          alt="두더지"
          className={cn(
            'h-full w-full object-cover',
            holeType === 'mole-hit' && 'scale-90 rounded-full ring-4 ring-red-400',
          )}
        />
      );
    }

    if (holeType === 'bomb') {
      return <img src={bombImage} alt="폭탄" className="h-full w-full object-cover" />;
    }

    return null;
  };

  return (
    <button
      type="button"
      onClick={() => onClick(index)}
      className={cn(
        'bg-primary200 flex items-center justify-center overflow-hidden',
        holeSize,
        'rounded-full',
      )}
      aria-label={`${index + 1}번 구멍`}
    >
      {renderInner()}
    </button>
  );
};

export default HoleCell;
