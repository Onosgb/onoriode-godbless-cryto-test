export const round = (count: number) => {
  if(count) {
    return count % 2 === 0 ?  count : count.toFixed(2);
  }
  return 0
  
};

export const bgColor = (count: number) => {
  return count < 0 ? "bg-danger" : count > 0 ? "bg-success" : "bg-primary";
};

export const color = (count: number) => {
  return count < 0
    ? "text-danger"
    : count > 0
    ? "text-success"
    : "text-primary";
};
