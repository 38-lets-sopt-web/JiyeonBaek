import { readStorage, writeStorage, generateId } from "../core/storage.js";
import { formatAmount } from "../utils/utils.js";

export const initModal = (modalElement, openBtn, closeBtn, formElement) => {
  if (openBtn && modalElement) {
    openBtn.addEventListener("click", () => {
      modalElement.style.display = "block";
      modalElement.setAttribute("aria-hidden", "false");

      const firstInput = modalElement.querySelector("input");
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 0);
      }
    });
  }

  const closeModal = () => {
    if (modalElement) {
      modalElement.style.display = "none";
      modalElement.setAttribute("aria-hidden", "true");
      if (formElement) formElement.reset();
    }
  };

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  if (modalElement) {
    modalElement.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal-backdrop")) {
        closeModal();
      }
    });
    document.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        modalElement.getAttribute("aria-hidden") === "false"
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
      const target = readStorage().find((expense) => Number(expense.id) === expenseId);
      if (!target) return;

      const amountText = `${formatAmount(target.amount)}원`;
      
      detailContent.innerHTML = "";

      const details = [
        { label: "제목", value: target.title },
        { label: "금액", value: amountText },
        { label: "날짜", value: target.date },
        { label: "카테고리", value: target.category },
        { label: "결제수단", value: target.payment },
      ];

      details.forEach((item) => {
        const row = document.createElement("div");
        row.className = "detail-row";

        const labelSpan = document.createElement("span");
        labelSpan.className = "detail-label";
        labelSpan.textContent = `${item.label}:`;

        const valueSpan = document.createElement("span");
        valueSpan.className = "detail-value";
        valueSpan.textContent = item.value;

        row.appendChild(labelSpan);
        row.appendChild(valueSpan);
        detailContent.appendChild(row);
      });

      detailModal.style.display = "block";
      detailModal.setAttribute("aria-hidden", "false");
    });
  }
};
