export const pad = (num: number) => (num < 10 ? `0${num}` : num);

export const getFullDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${pad(month)}-${pad(day)}`;
};
