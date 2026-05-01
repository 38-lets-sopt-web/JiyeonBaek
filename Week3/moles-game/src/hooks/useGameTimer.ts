import { useCallback, useEffect, useRef, useState } from 'react';
import { GAME_TICK_MS } from '@/constants/game';

const useGameTimer = (initialTime: number) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [prevInitialTime, setPrevInitialTime] = useState(initialTime);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  if (initialTime !== prevInitialTime) {
    setPrevInitialTime(initialTime);
    setTimeLeft(initialTime);
  }

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const resetTimer = useCallback(
    (nextTime: number = initialTime) => {
      stopTimer();
      setTimeLeft(nextTime);
    },
    [initialTime, stopTimer],
  );

  const startTimer = useCallback(
    (onFinish: () => void) => {
      stopTimer();

      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 0.1) {
            stopTimer();
            onFinish();
            return 0;
          }

          return Number((prev - 0.1).toFixed(1));
        });
      }, GAME_TICK_MS);
    },
    [stopTimer],
  );

  useEffect(() => stopTimer, [stopTimer]);

  return {
    timeLeft,
    startTimer,
    stopTimer,
    resetTimer,
  };
};

export default useGameTimer;
