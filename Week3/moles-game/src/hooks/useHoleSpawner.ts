import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { HIT_FEEDBACK_MS } from '@/constants/game';
import type { HoleType } from '@/types/game';

// hole 상태 관련 함수
interface SpawnerConfig {
  boardSize: number;
  spawnInterval: number;
  moleSpawnRate: number;
}

type HitHoleType = Extract<HoleType, 'mole-hit' | 'bomb-hit'>;

const createEmptyHoles = (holeCount: number): HoleType[] => {
  return Array.from({ length: holeCount }, () => 'empty');
};

const createSingleActiveHole = (
  holeCount: number,
  activeIndex: number,
  activeType: HoleType,
): HoleType[] => {
  return Array.from({ length: holeCount }, (_, index) =>
    index === activeIndex ? activeType : 'empty',
  );
};

const getRandomHoleIndex = (holeCount: number) => {
  return Math.floor(Math.random() * holeCount);
};

const getRandomHoleType = (moleSpawnRate: number): HoleType => {
  return Math.random() < moleSpawnRate ? 'mole' : 'bomb';
};

const hasHitHole = (holesState: HoleType[]) => {
  return holesState.some((hole) => hole === 'mole-hit' || hole === 'bomb-hit');
};

// timer 관련 함수
type IntervalRef = React.MutableRefObject<ReturnType<typeof setInterval> | null>;
type TimeoutRef = React.MutableRefObject<ReturnType<typeof setTimeout> | null>;

const clearSpawnTimer = (spawnTimerRef: IntervalRef) => {
  if (!spawnTimerRef.current) return;

  clearInterval(spawnTimerRef.current);
  spawnTimerRef.current = null;
};

const clearHitTimer = (hitTimerRef: TimeoutRef) => {
  if (!hitTimerRef.current) return;

  clearTimeout(hitTimerRef.current);
  hitTimerRef.current = null;
};

const clearTimers = (spawnTimerRef: IntervalRef, hitTimerRef: TimeoutRef) => {
  clearSpawnTimer(spawnTimerRef);
  clearHitTimer(hitTimerRef);
};

// 메인 훅 로직
const useHoleSpawner = ({ boardSize, spawnInterval, moleSpawnRate }: SpawnerConfig) => {
  const holeCount = useMemo(() => boardSize * boardSize, [boardSize]);

  const [holesState, setHolesState] = useState<HoleType[]>(() => createEmptyHoles(holeCount));

  const spawnTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHitFeedbackActiveRef = useRef(false);

  const clearHoles = () => {
    setHolesState(createEmptyHoles(holeCount));
  };

  const openRandomHole = () => {
    const randomIndex = getRandomHoleIndex(holeCount);
    const randomHoleType = getRandomHoleType(moleSpawnRate);

    setHolesState(createSingleActiveHole(holeCount, randomIndex, randomHoleType));
  };

  const startSpawner = useCallback(() => {
    clearSpawnTimer(spawnTimerRef);

    spawnTimerRef.current = setInterval(() => {
      if (isHitFeedbackActiveRef.current) return;

      setHolesState((prevHolesState) => {
        if (hasHitHole(prevHolesState)) return prevHolesState;

        const randomIndex = getRandomHoleIndex(holeCount);
        const randomHoleType = getRandomHoleType(moleSpawnRate);

        return createSingleActiveHole(holeCount, randomIndex, randomHoleType);
      });
    }, spawnInterval);
  }, [holeCount, moleSpawnRate, spawnInterval]);

  const stopSpawner = useCallback(() => {
    clearTimers(spawnTimerRef, hitTimerRef);
    isHitFeedbackActiveRef.current = false;
  }, []);

  const showHitFeedback = useCallback(
    (index: number, hitHoleType: HitHoleType) => {
      isHitFeedbackActiveRef.current = true;
      setHolesState(createSingleActiveHole(holeCount, index, hitHoleType));

      clearHitTimer(hitTimerRef);

      hitTimerRef.current = setTimeout(() => {
        setHolesState(createEmptyHoles(holeCount));
        isHitFeedbackActiveRef.current = false;
      }, HIT_FEEDBACK_MS);
    },
    [holeCount],
  );

  const showMoleHit = (index: number) => {
    showHitFeedback(index, 'mole-hit');
  };

  const showBombHit = (index: number) => {
    showHitFeedback(index, 'bomb-hit');
  };

  useEffect(() => {
    setHolesState(createEmptyHoles(holeCount));
  }, [holeCount]);

  useEffect(() => {
    return () => clearTimers(spawnTimerRef, hitTimerRef);
  }, []);

  return {
    holesState,
    clearHoles,
    openRandomHole,
    startSpawner,
    stopSpawner,
    showMoleHit,
    showBombHit,
  };
};

export default useHoleSpawner;
