export const renderExpenses = (list, container) => {
  if (!container) return;

  if (!list || list.length === 0) {
    container.innerHTML = `<p id="no-results">조건에 맞는 내역이 없어요</p>`;
    return;
  }

  const thead = `
    <thead>
      <tr>
        <th scope="col"><input type="checkbox" id="master-check" aria-label="전체 선택" /></th>
        <th scope="col">제목</th>
        <th scope="col">금액</th>
        <th scope="col">날짜</th>
        <th scope="col">카테고리</th>
        <th scope="col">결제수단</th>
      </tr>
    </thead>`;

  const totalAmount = list.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);

  const tbody = `
    <tbody>
      ${list
        .map(
          (expense) => `
        <tr data-id="${expense.id}">
          <td><input type="checkbox" class="row-check" data-id="${expense.id}" aria-label="${expense.title} 선택" /></td>
          <td><button type="button" class="expense-title" data-id="${expense.id}">${expense.title}</button></td>
          <td class="${expense.amount < 0 ? "expense-negative" : "expense-positive"}">${expense.amount > 0 ? "+" : ""}${expense.amount.toLocaleString()}</td>
          <td>${expense.date}</td>
          <td>${expense.category}</td>
          <td>${expense.payment}</td>
        </tr>
      `
        )
        .join("")}
    </tbody>`;

  const tfoot = `
    <tfoot>
      <tr class="total-row">
        <td colspan="3"><strong>TOTAL</strong></td>
        <td colspan="3" class="${totalAmount < 0 ? "expense-negative" : "expense-positive"}"><strong>${totalAmount > 0 ? "+" : ""}${totalAmount.toLocaleString()}</strong></td>
      </tr>
    </tfoot>`;

  container.innerHTML = `<table class="expense-table">${thead}${tbody}${tfoot}</table>`;
};