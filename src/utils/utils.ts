export const round = (count: number) => {
  return Math.round(count);
};

export const bgColor = (count: number) => {
  return count < 0 ? "bg-danger" : count > 0 ? "bg-success" : "";
};

export const color = (count: number) => {
  return count < 0 ? "text-danger" : count > 0 ? "text-success" : "";
};
