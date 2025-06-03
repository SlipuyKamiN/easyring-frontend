import { formatISO } from "date-fns";

export const getISOTodayDate = () => {
  const formattedDate = formatISO(new Date().setHours(0, 0, 0, 0));

  return formattedDate.toString();
};
