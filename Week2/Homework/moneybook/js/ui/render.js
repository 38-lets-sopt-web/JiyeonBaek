import { formatAmount } from "../utils/utils.js";

export const renderExpenses = (list, container) => {
  if (!container) return;

  container.innerHTML = "";

  if (!list || list.length === 0) {
    const noResultsMsg = document.createElement("p");
    noResultsMsg.id = "no-results";
    noResultsMsg.textContent = "조건에 맞는 내역이 없어요";
    container.appendChild(noResultsMsg);
    return;
  }

  const table = document.createElement("table");
  table.className = "expense-table";

  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th scope="col"><input type="checkbox" id="master-check" aria-label="전체 선택" /></th>
      <th scope="col">제목</th>
      <th scope="col">금액</th>
      <th scope="col">날짜</th>
      <th scope="col">카테고리</th>
      <th scope="col">결제수단</th>
    </tr>
  `;
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  let totalAmount = 0;

  list.forEach((expense) => {
    const numAmount = Number(expense.amount || 0);
    totalAmount += numAmount;

    const tr = document.createElement("tr");
    tr.setAttribute("data-id", expense.id);

    const tdCheckbox = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "row-check";
    checkbox.setAttribute("data-id", expense.id);
    checkbox.setAttribute("aria-label", `${expense.title} 선택`);
    tdCheckbox.appendChild(checkbox);

    const tdTitle = document.createElement("td");
    const titleBtn = document.createElement("button");
    titleBtn.type = "button";
    titleBtn.className = "expense-title";
    titleBtn.setAttribute("data-id", expense.id);
    titleBtn.textContent = expense.title; 
    tdTitle.appendChild(titleBtn);

    const tdAmount = document.createElement("td");
    tdAmount.className = numAmount < 0 ? "expense-negative" : "expense-positive";
    tdAmount.textContent = formatAmount(expense.amount);

    const tdDate = document.createElement("td");
    tdDate.textContent = expense.date;

    const tdCategory = document.createElement("td");
    tdCategory.textContent = expense.category;

    const tdPayment = document.createElement("td");
    tdPayment.textContent = expense.payment;

    tr.appendChild(tdCheckbox);
    tr.appendChild(tdTitle);
    tr.appendChild(tdAmount);
    tr.appendChild(tdDate);
    tr.appendChild(tdCategory);
    tr.appendChild(tdPayment);

    tbody.appendChild(tr);
  });
  
  table.appendChild(tbody);

  const tfoot = document.createElement("tfoot");
  const trTotal = document.createElement("tr");
  trTotal.className = "total-row";
  
  const tdLabel = document.createElement("td");
  tdLabel.colSpan = 3;
  const strongLabel = document.createElement("strong");
  strongLabel.textContent = "TOTAL";
  tdLabel.appendChild(strongLabel);
  
  const tdTotalAmount = document.createElement("td");
  tdTotalAmount.colSpan = 3;
  tdTotalAmount.className = totalAmount < 0 ? "expense-negative" : "expense-positive";
  const strongTotal = document.createElement("strong");
  strongTotal.textContent = formatAmount(totalAmount);
  tdTotalAmount.appendChild(strongTotal);

  trTotal.appendChild(tdLabel);
  trTotal.appendChild(tdTotalAmount);
  tfoot.appendChild(trTotal);

  table.appendChild(tfoot);
  
  container.appendChild(table);
};