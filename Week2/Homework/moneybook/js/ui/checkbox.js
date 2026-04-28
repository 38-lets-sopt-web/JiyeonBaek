import { readStorage, writeStorage } from "../core/storage.js";

export const initCheckbox = (lists, deleteSelectedBtn, onDataChanged) => {
  if (!lists || !deleteSelectedBtn) return;

  const updateMasterCheckbox = () => {
    const allChecks = lists.querySelectorAll(".row-check");
    const checkedChecks = lists.querySelectorAll(".row-check:checked");
    const masterCheck = lists.querySelector("#master-check");

    if (!masterCheck) return;

    if (allChecks.length > 0 && checkedChecks.length === allChecks.length) {
      masterCheck.checked = true;
      masterCheck.indeterminate = false;
    } else if (
      checkedChecks.length > 0 &&
      checkedChecks.length < allChecks.length
    ) {
      masterCheck.checked = false;
      masterCheck.indeterminate = true;
    } else {
      masterCheck.checked = false;
      masterCheck.indeterminate = false;
    }
  };

  if (deleteSelectedBtn) {
    deleteSelectedBtn.addEventListener("click", () => {
      const checkedBoxes = lists.querySelectorAll(".row-check:checked");
      if (checkedBoxes.length === 0) return;

      if (
        !confirm(
          `선택하신 ${checkedBoxes.length}개의 내역을 삭제하시겠습니까???`,
        )
      ) {
        return;
      }

      const selectedIds = Array.from(checkedBoxes).map((cb) =>
        Number(cb.getAttribute("data-id")),
      );

      const allExpenses = readStorage();
      const remainingExpenses = allExpenses.filter(
        (e) => !selectedIds.includes(Number(e.id)),
      );

      writeStorage(remainingExpenses);

      if (typeof onDataChanged === "function") {
        onDataChanged();
      }
    });
  }

  if (lists) {
    lists.addEventListener("change", (e) => {
      const { target } = e;

      if (target.id === "master-check") {
        target.indeterminate = false;
        const isChecked = target.checked;
        lists.querySelectorAll(".row-check").forEach((cb) => {
          cb.checked = isChecked;
        });
      } else if (target.classList.contains("row-check")) {
        updateMasterCheckbox();
      }
    });
  }
};
