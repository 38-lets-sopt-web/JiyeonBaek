export const includesText = (target, query) => {
  if (!query) return true;
  const trimmedQuery = String(query).trim();
  if (!trimmedQuery) return true;
  if (target == null) return false;
  return String(target).toLowerCase().includes(trimmedQuery.toLowerCase());
};

export const getFilteredExpenses = (formData, sourceList = []) => {
  const title = formData.get("title");
  const type = formData.get("type");
  const category = formData.get("category");
  const payment = formData.get("payment");

  return sourceList.filter((e) => {
    const byTitle = includesText(e.title, title);

    let byType = true;
    if (type === "income") byType = e.amount > 0;
    else if (type === "expense") byType = e.amount < 0;

    const byCategory = !category || e.category === category;
    const byPayment = !payment || e.payment === payment;

    return byTitle && byType && byCategory && byPayment;
  });
};

export const sortExpensesByDate = (list, sortValue) => {
  const copied = [...list];
  copied.sort((a, b) => {
    const left = new Date(a.date).getTime();
    const right = new Date(b.date).getTime();
    return sortValue === "asc" ? left - right : right - left;
  });
  return copied;
};
