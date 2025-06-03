import { parseISO } from "date-fns";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getISOTodayDate } from "~/helpers/getISOTodayDate";
import { getUserState } from "~/Redux/userSelectors";

export const useSmartSearchParams = () => {
  const user = useSelector(getUserState);
  const [searchParams, setSearchParams] = useSearchParams({
    date: getISOTodayDate(),
    driver: user._id,
  });
  const params = Object.fromEntries([...searchParams]);

  const updateParam = (key, value) => {
    if (!value || value === "1970-01-01T01:00:00+01:00") {
      delete params[key];
      return setSearchParams(params);
    }

    setSearchParams({
      ...params,
      [key]: value,
    });
  };

  const get = (paramName) => {
    const getParam = (name) => searchParams.get(name);

    switch (paramName) {
      case "date":
        return getParam("date") ? parseISO(getParam("date")) : null;

      case "search":
        return getParam("search") ? getParam("search") : "";

      case "driver":
        return getParam("driver") ? getParam("driver") : null;

      default:
        return null;
    }
  };

  return { searchParams, updateParam, get };
};
