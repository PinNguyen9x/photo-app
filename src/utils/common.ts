export const randomNumber = (min: number, max: number): number => {
  return min + Math.trunc(Math.random() * (max - min));
};
