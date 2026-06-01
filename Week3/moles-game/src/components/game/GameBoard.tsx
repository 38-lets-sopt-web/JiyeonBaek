import { cn } from '@/utils/cn';
import Button from '@/components/common/Button';
import Dropdown from '@/components/common/Dropdown';
import { LEVEL_OPTIONS, type Level } from '@/constants/game';
import type { HoleType } from '@/types/game';
import HoleCell from './HoleCell';

interface GameBoardProps {
  level: Level;
  isRunning: boolean;
  boardSize: number;
  holeSize: string;
  holes: number[];
  holesState: HoleType[];
  onLevelChange: (level: Level) => void;
  onStart: () => void;
  onStop: () => void;
  onHoleClick: (index: number) => void;
}

const GameBoard = ({
  level,
  isRunning,
  boardSize,
  holeSize,
  holes,
  holesState,
  onLevelChange,
  onStart,
  onStop,
  onHoleClick,
}: GameBoardProps) => {
  return (
    <section
      className={cn('bg-primary100', 'flex min-h-0 flex-1 flex-col rounded-2xl', 'px-8 py-7')}
    >
      <div className="flex items-center justify-between">
        <Dropdown
          value={level}
          options={LEVEL_OPTIONS}
          onChange={(value) => onLevelChange(value as Level)}
          disabled={isRunning}
        />

        <div className="flex gap-3">
          <Button onClick={onStart} bgColor="bg-green-500" textColor="text-white">
            시작
          </Button>

          <Button onClick={onStop} bgColor="bg-red-300" textColor="text-white">
            중단
          </Button>
        </div>
      </div>

      <div className={cn('rounded-2xl', 'flex flex-1 items-center justify-center overflow-auto')}>
        <div className="grid gap-5" style={{ gridTemplateColumns: `repeat(${boardSize}, auto)` }}>
          {holes.map((hole) => (
            <HoleCell
              key={hole}
              index={hole}
              holeType={holesState[hole]}
              holeSize={holeSize}
              onClick={onHoleClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameBoard;
