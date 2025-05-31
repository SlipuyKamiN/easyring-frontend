import { formatISO } from "date-fns";

export const getDefaultSearchParams = (_id) => {
  if (!_id) return "";

  const formattedDate = formatISO(new Date().setHours(0, 0, 0, 0));

  const searchParams = new URLSearchParams();
  searchParams.set("driver", _id);
  searchParams.set("date", formattedDate);

  return searchParams.toString(); // Повертає рядок параметрів пошукового запиту
};
