import { useEffect, useState } from 'react';
import type { RankingInput, RankingRecord } from '@/types/ranking';
import { STORAGE_KEY } from '@/constants/ranking';

const sortRankings = (records: RankingRecord[]) => {
  return [...records].sort((a, b) => {
    const levelDiff = Number(b.level) - Number(a.level);
    if (levelDiff !== 0) {
      return levelDiff;
    }

    const scoreDiff = b.score - a.score;
    if (scoreDiff !== 0) {
      return scoreDiff;
    }

    return new Date(b.successTime).getTime() - new Date(a.successTime).getTime();
  });
};

const useRanking = () => {
  const [records, setRecords] = useState<RankingRecord[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        return sortRankings(JSON.parse(raw) as RankingRecord[]);
      }
    } catch (error) {
      console.error('랭킹 데이터를 불러오지 못했습니다.', error);
      localStorage.removeItem(STORAGE_KEY);
    }
    return [];
  });

  useEffect(() => {
    if (records.length === 0) {
      localStorage.removeItem(STORAGE_KEY);
      return;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  }, [records]);

  const addRecord = ({ level, score, successTime }: RankingInput) => {
    setRecords((prev) =>
      sortRankings([
        ...prev,
        {
          id: crypto.randomUUID(),
          level,
          score,
          successTime,
        },
      ]),
    );
  };

  const clearRecords = () => {
    setRecords([]);
  };

  return {
    records,
    addRecord,
    clearRecords,
  };
};

export default useRanking;
