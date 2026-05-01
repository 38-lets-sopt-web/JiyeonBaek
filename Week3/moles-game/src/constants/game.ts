export const LEVEL_OPTIONS = [
  { value: '1', label: 'Level 1' },
  { value: '2', label: 'Level 2' },
  { value: '3', label: 'Level 3' },
] as const;

export type Level = (typeof LEVEL_OPTIONS)[number]['value'];

export const LEVEL_CONFIG: Record<
  Level,
  { size: 2 | 3 | 4; time: number; spawnInterval: number; moleSpawnRate: number }
> = {
  '1': { size: 2, time: 15, spawnInterval: 1000, moleSpawnRate: 0.8 },
  '2': { size: 3, time: 20, spawnInterval: 800, moleSpawnRate: 0.7 },
  '3': { size: 4, time: 30, spawnInterval: 600, moleSpawnRate: 0.6 },
};

export const HOLE_SIZE_BY_BOARD: Record<2 | 3 | 4, string> = {
  2: 'h-64 w-64',
  3: 'h-48 w-48',
  4: 'h-40 w-40',
};

export const GAME_TICK_MS = 100;
export const HIT_FEEDBACK_MS = 700;
