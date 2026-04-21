import { readStorage, writeStorage, generateId } from "./storage.js";

export const initModal = (
  addModal,
  addExpenseBtn,
  closeAddModalBtn,
  addExpenseForm,
) => {
  if (addExpenseBtn && addModal) {
    addExpenseBtn.addEventListener("click", () => {
      addModal.style.display = "block";
      addModal.setAttribute("aria-hidden", "false");

      const firstInput = addModal.querySelector("input");
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 0);
      }
    });
  }

  const closeModal = () => {
    if (addModal) {
      addModal.style.display = "none";
      addModal.setAttribute("aria-hidden", "true");
      if (addExpenseForm) addExpenseForm.reset();
    }
  };

  if (closeAddModalBtn) {
    closeAddModalBtn.addEventListener("click", closeModal);
  }

  if (addModal) {
    addModal.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal-backdrop")) {
        closeModal();
      }
    });
    document.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        addModal.getAttribute("aria-hidden") === "false"
      ) {
        closeModal();
      }
    });
  }
};

export const initAddExpense = (addExpenseForm, addModal, onDataChanged) => {
  if (!addExpenseForm) return;

  addExpenseForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = addExpenseForm.querySelectorAll(
      "input[required], select[required]",
    );
    const isEmpty = Array.from(inputs).some((input) => {
      if (input.type === "number") {
        return !input.value;
      }
      return !input.value.trim();
    });

    if (isEmpty) {
      alert("모든 항목을 입력해주세요");
      return;
    }

    const fd = new FormData(addExpenseForm);
    const type = fd.get("type") || "";
    const rawAmount = Number(fd.get("amount")) || 0;
    const normalizedAmount =
      type === "expense" ? -Math.abs(rawAmount) : Math.abs(rawAmount);

    const newExpense = {
      id: generateId(),
      title: fd.get("title")?.trim() || "",
      date: fd.get("date") || "",
      category: fd.get("category") || "",
      payment: fd.get("payment") || "",
      amount: normalizedAmount,
    };

    const all = readStorage();
    all.push(newExpense);
    writeStorage(all);

    addExpenseForm.reset();
    addModal.style.display = "none";
    addModal.setAttribute("aria-hidden", "true");

    if (typeof onDataChanged === "function") {
      onDataChanged();
    }
  });
};

export const initDetailModal = (lists, detailModal, detailContent) => {
  if (lists && detailModal && detailContent) {
    lists.addEventListener("click", (e) => {
      const trigger = e.target.closest(".expense-title");
      if (!trigger) return;
      e.preventDefault();

      const expenseId = Number(trigger.getAttribute("data-id"));
      const target = readStorage().find(
        (expense) => Number(expense.id) === expenseId,
      );
      if (!target) return;

      const amountText = `${target.amount > 0 ? "+" : ""}${target.amount.toLocaleString()}원`;
      detailContent.innerHTML = `
        <div class="detail-row">
          <span class="detail-label">제목:</span>
          <span class="detail-value">${target.title}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">금액:</span>
          <span class="detail-value">${amountText}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">날짜:</span>
          <span class="detail-value">${target.date}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">카테고리:</span>
          <span class="detail-value">${target.category}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">결제수단:</span>
          <span class="detail-value">${target.payment}</span>
        </div>
      `;

      detailModal.style.display = "block";
      detailModal.setAttribute("aria-hidden", "false");
    });
  }
};
