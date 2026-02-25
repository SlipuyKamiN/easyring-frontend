export const calculatePrice = (distance, size) => {
  const minimumPrice = 50;
  const vat = 1.19;
  const avgSpeed = 27;
  const maxDistance = 50;
  const distanceKm = distance > maxDistance ? maxDistance : distance;

  if (!distanceKm || !size) return 0;

  const rates = {
    S: { hourlyRate: 50, handlingTime: 0.25 },
    M: { hourlyRate: 65, handlingTime: 0.33 },
    L: { hourlyRate: 80, handlingTime: 0.5 },
  };

  const config = rates[size];
  if (!config) return minimumPrice;

  const travelTime = distanceKm / avgSpeed;
  const totalTime = travelTime + config.handlingTime;

  const netPrice = totalTime * config.hourlyRate;
  const grossPrice = netPrice * vat;

  if (grossPrice < minimumPrice) return minimumPrice;

  return Math.ceil(grossPrice / 5) * 5;
};
