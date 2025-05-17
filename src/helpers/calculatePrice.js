export const calculatePrice = (distance) => {
  const price = distance * 1.5;

  return Math.ceil(price / 5) * 5;
};
