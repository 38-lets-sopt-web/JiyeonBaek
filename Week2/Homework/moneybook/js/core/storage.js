import { expenses } from "../../data/expense.js";

const STORAGE_KEY = "expenseData";

/* localStorage 초기화 (처음 한번만 실행) */
(function initStorageOnce() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    try {
      const seed = Array.isArray(expenses) ? expenses : [];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
    } catch (error) {
      console.error("localStorage 초기화 실패", error);
    }
  }
})();

/* 데이터 불러오기 */
export const readStorage = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (_) {
    return [];
  }
};

/* 데이터 저장 */
export const writeStorage = (list) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (error) {
    console.error("데이터 저장 실패", error);
  }
};

/* 새 ID 생성 */
export const generateId = () => {
  const all = readStorage();
  if (all.length === 0) {
    return 1;
  }
  const maxId = Math.max(...all.map(e => Number(e.id) || 0), 0);
  return maxId + 1;
};