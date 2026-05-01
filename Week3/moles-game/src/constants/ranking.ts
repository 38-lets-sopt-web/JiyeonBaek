export const RANKING_TABLE_COLUMNS = ['순위', '레벨', '점수', '성공 시간'] as const;

export const STORAGE_KEY = 'moles-game-ranking';

export const RANKING_MESSAGES = {
  CONFIRM_CLEAR: '랭킹 기록을 모두 초기화할까요?',
  EMPTY_RECORD: '아직 기록이 없습니다.',
} as const;
