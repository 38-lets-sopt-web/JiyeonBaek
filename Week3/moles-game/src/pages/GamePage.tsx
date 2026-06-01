import { useEffect, useRef } from 'react';
import Modal from '@/components/common/Modal';
import GamePannel from '@/components/game/GamePannel';
import GameBoard from '@/components/game/GameBoard';
import useGameBoard from '@/hooks/useGameBoard';
import type { RankingInput } from '@/types/ranking';

interface GamePageProps {
  onSuccessGame: (record: RankingInput) => void;
}

const GamePage = ({ onSuccessGame }: GamePageProps) => {
  const hasSavedRef = useRef(false);
  const {
    level,
    setLevel,
    isRunning,
    boardSize,
    holeSize,
    holes,
    holesState,
    timeLeft,
    score,
    successCount,
    failCount,
    message,
    showResultModal,
    startGame,
    handleHoleClick,
    resetGame,
  } = useGameBoard();

  useEffect(() => {
    if (!showResultModal) {
      hasSavedRef.current = false;
      return;
    }

    if (hasSavedRef.current) return;

    onSuccessGame({
      level,
      score,
      successTime: new Date().toISOString(),
    });

    hasSavedRef.current = true;
  }, [level, onSuccessGame, score, showResultModal]);

  return (
    <section className="flex min-h-0 flex-1 gap-6">
      <GamePannel
        timeLeft={timeLeft.toFixed(1)}
        score={score}
        successCount={successCount}
        failCount={failCount}
        message={message}
      />

      <GameBoard
        level={level}
        isRunning={isRunning}
        boardSize={boardSize}
        holeSize={holeSize}
        holes={holes}
        holesState={holesState}
        onLevelChange={setLevel}
        onStart={startGame}
        onStop={resetGame}
        onHoleClick={handleHoleClick}
      />

      {showResultModal && <Modal levelLabel={`Level ${level}`} score={score} onClose={resetGame} />}
    </section>
  );
};

export default GamePage;
