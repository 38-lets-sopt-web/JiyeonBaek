export const formatRuntime = (runtime: number | null) => {
  if (!runtime) {
    return "정보 없음";
  }

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  if (hours === 0) {
    return `${minutes}분`;
  }

  return `${hours}시간 ${minutes}분`;
};

export const formatCurrency = (amount: number) => {
  if (!amount) {
    return "정보 없음";
  }

  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    maximumFractionDigits: 0,
    style: "currency",
  }).format(amount);
};

export const getMovieImageUrl = (baseUrl: string, path?: string | null) => {
  if (!path) {
    return null;
  }

  return `${baseUrl}${path}`;
};
