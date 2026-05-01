import { useEffect, useRef, useState } from 'react';
import { GAME_TICK_MS } from '@/constants/game';

const useGameTimer = (initialTime: number) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const prevInitialTimeRef = useRef(initialTime);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resetTimer = (nextTime: number = initialTime) => {
    stopTimer();
    setTimeLeft(nextTime);
  };

  useEffect(() => {
    if (initialTime === prevInitialTimeRef.current) return;

    prevInitialTimeRef.current = initialTime;
    resetTimer(initialTime);
  }, [initialTime]);

  const startTimer = (onFinish: () => void) => {
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
  };

  useEffect(() => {
    return () => stopTimer();
  }, []);

  return {
    timeLeft,
    startTimer,
    stopTimer,
    resetTimer,
  };
};

export default useGameTimer;
