export const calculatePrice = (distance, size) => {
  let sizePrice = 1;

  switch (size) {
    case "M":
      sizePrice = 1.25;
      break;

    case "L":
      sizePrice = 1.5;
      break;

    default:
      sizePrice = 1;
      break;
  }
  const price = distance * sizePrice;

  if (!size || !distance) return 0;

  if (price < 20) return 20;

  return Math.ceil(price / 5) * 5;
};
