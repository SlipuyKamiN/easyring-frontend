import { parseISO } from "date-fns";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { getISOTodayDate } from "~/helpers/getISOTodayDate";

export const useSmartSearchParams = (user) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!hasInitialized.current && user?._id) {
      const isEmpty = searchParams.size === 0;

      if (isEmpty) {
        const today = getISOTodayDate();

        const defaults = {
          driver: user._id,
          date: today,
        };

        setSearchParams(defaults, { replace: true });
      }

      hasInitialized.current = true;
    }
  }, [searchParams, setSearchParams, user]);

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
