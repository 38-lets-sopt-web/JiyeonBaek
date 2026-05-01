import { useEffect, useMemo, useState } from 'react';
import { HOLE_SIZE_BY_BOARD, LEVEL_CONFIG, type Level } from '@/constants/game';
import useGameTimer from '@/hooks/useGameTimer';
import useHoleSpawner from '@/hooks/useHoleSpawner';
import useGameState from '@/hooks/useGameState';

const useGameBoard = () => {
  const [level, setLevel] = useState<Level>('1');

  const {
    isRunning,
    score,
    successCount,
    failCount,
    message,
    showResultModal,
    resetGameState,
    finishGameState,
    startGameState,
    handleSuccess,
    handleFail,
    clearMessage,
  } = useGameState();

  const levelConfig = LEVEL_CONFIG[level];
  const boardSize = levelConfig.size;
  const holeSize = HOLE_SIZE_BY_BOARD[boardSize];
  const limitTime = levelConfig.time;
  const spawnInterval = levelConfig.spawnInterval;
  const moleSpawnRate = levelConfig.moleSpawnRate;

  const { timeLeft, startTimer, stopTimer, resetTimer } = useGameTimer(limitTime);
  const {
    holesState,
    clearHoles,
    openRandomHole,
    startSpawner,
    stopSpawner,
    showMoleHit,
    showBombHit,
  } = useHoleSpawner({
    boardSize,
    spawnInterval,
    moleSpawnRate,
  });

  useEffect(() => {
    if (!isRunning) return;
    const isAllEmpty = holesState.every((hole) => hole === 'empty');
    if (isAllEmpty) {
      clearMessage();
    }
  }, [holesState, isRunning, clearMessage]);

  const holes = useMemo(
    () => Array.from({ length: boardSize * boardSize }, (_, index) => index),
    [boardSize],
  );

  const resetGame = () => {
    stopTimer();
    stopSpawner();
    resetGameState();
    resetTimer(limitTime);
    clearHoles();
  };

  const finishGame = () => {
    stopTimer();
    stopSpawner();
    finishGameState();
    clearHoles();
  };

  const startGame = () => {
    if (isRunning) return;

    startGameState();
    resetTimer(limitTime);
    openRandomHole();
    startTimer(finishGame);
    startSpawner();
  };
  const handleHoleClick = (index: number) => {
    if (!isRunning) return;

    const clickedHole = holesState[index];

    switch (clickedHole) {
      case 'mole':
        handleSuccess();
        showMoleHit(index);
        break;
      case 'bomb':
        handleFail();
        showBombHit(index);
        break;
      default:
        break;
    }
  };

  return {
    level,
    setLevel,
    isRunning,
    timeLeft,
    score,
    successCount,
    failCount,
    message,
    showResultModal,
    limitTime,
    boardSize,
    holeSize,
    holes,
    holesState,
    startGame,
    handleHoleClick,
    resetGame,
  };
};

export default useGameBoard;
