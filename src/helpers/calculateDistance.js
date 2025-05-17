import axios from "axios";

export const calculateDistance = async (sender, recipient) => {
  if (!sender.properties || !recipient.properties) return 0;

  const startPoint = `${sender.address.properties.lat.toString()},${sender.address.properties.lon.toString()}`;
  const endPoint = `${recipient.address.properties.lat.toString()},${recipient.address.properties.lon.toString()}`;
  const myAPIKey = "de6774ac4979423286c131f56e59ff31";
  const distance = await axios
    .get(
      `https://api.geoapify.com/v1/routing?waypoints=${startPoint}|${endPoint}&mode=drive&details=instruction_details&apiKey=${myAPIKey}`
    )
    .then((res) => res.data.features[0].properties.distance)
    .catch((err) => console.log(err));

  return (distance / 1000).toFixed(2);
};
