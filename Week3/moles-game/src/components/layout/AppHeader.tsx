import type { GameMode } from '@/types/app';
import Header from '../common/Header';
import Button from '../common/Button';

interface AppHeaderProps {
  mode: GameMode;
  setMode: (mode: GameMode) => void;
}

const AppHeader = ({ mode, setMode }: AppHeaderProps) => {
  const getButtonStyle = (type: GameMode) => {
    const isActive = mode === type;

    return {
      bgColor: isActive ? 'bg-primary300' : 'border border-primary300 bg-white',
      textColor: isActive ? 'text-white' : 'text-primary300',
    };
  };

  return (
    <Header title="두더지 게임">
      <div className="flex gap-2">
        <Button onClick={() => setMode('game')} {...getButtonStyle('game')}>
          게임
        </Button>

        <Button onClick={() => setMode('ranking')} {...getButtonStyle('ranking')}>
          랭킹
        </Button>
      </div>
    </Header>
  );
};

export default AppHeader;
