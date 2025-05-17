import { formatISO, setHours, setMinutes } from "date-fns";

export const combineDateTime = (dateObject, timeObject) => {
  const hours = timeObject.getHours();
  const minutes = timeObject.getMinutes();

  let combined = setHours(dateObject, hours);
  combined = setMinutes(combined, minutes);

  return formatISO(combined);
};
