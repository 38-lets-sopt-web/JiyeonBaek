export const formatDate = (dateString: string | Date | number) => {
  return new Date(dateString).toLocaleString('ko-KR');
};
