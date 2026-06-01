import type { Level } from '@/constants/game';

export interface RankingRecord {
  id: string;
  level: Level;
  score: number;
  successTime: string;
}

export interface RankingInput {
  level: Level;
  score: number;
  successTime: string;
}
