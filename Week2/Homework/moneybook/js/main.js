import { readStorage } from "./storage.js";
import { renderExpenses } from "./render.js";
import { getFilteredExpenses, sortExpensesByDate } from "./filter.js";
import { initModal, initAddExpense, initDetailModal } from "./modal.js";
import { initCheckbox } from "./checkbox.js";

const form = document.getElementById("search-filter-form");
const lists = document.getElementById("lists");
const sortDateSelect = document.getElementById("sort-date");
const deleteSelectedBtn = document.getElementById("delete-selected");
const addExpenseBtn = document.getElementById("add-expense");
const addModal = document.getElementById("add-modal");
const closeAddModalBtn = document.getElementById("close-add-modal");
const addExpenseForm = document.getElementById("add-expense-form");
const detailModal = document.getElementById("detail-modal");
const closeDetailModalBtn = document.getElementById("close-detail-modal");
const detailContent = document.getElementById("detail-content");
const logoRefreshBtn = document.getElementById("logo-refresh");

/* 페이지 새로고침 */
if (logoRefreshBtn) {
  logoRefreshBtn.addEventListener("click", (e) => {
    e.preventDefault();
    location.reload();
  });
}

/* 현재 필터 + 정렬 상태로 목록 갱신 */
const renderByCurrentControls = () => {
  const allExpenses = readStorage();

  if (!form) {
    const sortValue = sortDateSelect?.value || "desc";
    const sortedOnly = sortExpensesByDate(allExpenses, sortValue);
    renderExpenses(sortedOnly, lists);
    return;
  }

  const formData = new FormData(form);
  const filtered = getFilteredExpenses(formData, allExpenses);
  const sortValue = sortDateSelect?.value || "desc";
  const sorted = sortExpensesByDate(filtered, sortValue);
  renderExpenses(sorted, lists);
};

/* 검색 필터 */
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    renderByCurrentControls();
  });

  form.addEventListener("reset", () => {
    setTimeout(() => {
      if (sortDateSelect) sortDateSelect.value = "desc";
      renderByCurrentControls();
    }, 0);
  });
}

if (sortDateSelect) {
  sortDateSelect.addEventListener("change", renderByCurrentControls);
}

/* 모달 초기화 */
initModal(addModal, addExpenseBtn, closeAddModalBtn, addExpenseForm);
initModal(detailModal, null, closeDetailModalBtn, null);
initDetailModal(lists, detailModal, detailContent);

/* 내역 추가 기능 초기화 */
initAddExpense(addExpenseForm, addModal, renderByCurrentControls);

/* 체크박스 기능 초기화 */
initCheckbox(lists, deleteSelectedBtn, renderByCurrentControls);

/* 초기 렌더링 */
renderByCurrentControls();
