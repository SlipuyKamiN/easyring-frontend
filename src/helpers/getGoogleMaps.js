export const getGoogleMapsLink = (address) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

export const getGoogleMapsGetDirections = (address) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address
  )}`;
