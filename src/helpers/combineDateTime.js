import { formatISO, isToday, parseISO, setHours, setMinutes } from "date-fns";

export const combineDateTime = (dateObject, timeObject) => {
  const hours = timeObject.getHours();
  const minutes = timeObject.getMinutes();

  let combined = setHours(dateObject, hours);
  combined = setMinutes(combined, minutes);

  return formatISO(combined);
};

export const parceInitialDate = (date) => {
  return date ? parseISO(date) : null;
};

export const getMinTime = (selectedDate) => {
  const now = new Date();

  if (selectedDate && isToday(selectedDate)) {
    const currentMinutes = now.getMinutes();
    const roundedMinutes = currentMinutes < 30 ? 0 : 30;
    const extraHour = 1 + (currentMinutes >= 30 ? 1 : 0);

    const hours = now.getHours() + extraHour;

    return new Date(0, 0, 0, hours, roundedMinutes, 0, 0);
  }

  return new Date(0, 0, 0, 8, 0, 0, 0);
};

export const getMinDate = () => {
  const now = new Date();
  const cutoff = new Date();
  cutoff.setHours(17, 30, 0, 0);

  if (now > cutoff) {
    const tomorrow = new Date();
    tomorrow.setDate(now.getDate() + 1);
    return tomorrow;
  }

  return now;
};
