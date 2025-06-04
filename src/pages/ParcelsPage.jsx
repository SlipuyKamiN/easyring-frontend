import { Filter } from "~/components/ParcelsList/Filter";
import { useSmartSearchParams } from "~/hooks/useSmartSearchParams";
import { useSearchParcelsQuery } from "~/Redux/parcelsSlice";
import { ParcelsList } from "~/components/ParcelsList/ParcelsList";
import { useSelector } from "react-redux";
import { getUserState } from "~/Redux/userSelectors";
import { useEffect, useState } from "react";

const ParcelsPage = () => {
  const user = useSelector(getUserState);
  const isAdmin = user.role === "admin";
  const { searchParams, updateParam, get } = useSmartSearchParams(user);
  const [query, setQuery] = useState("");
  const { data, error } = useSearchParcelsQuery(query);

  console.log(error);

  useEffect(() => {
    if (searchParams.size >= 1 && !query) {
      setQuery(searchParams.toString());
    }
  }, [query, searchParams]);

  return (
    <>
      <Filter props={{ setQuery, searchParams, updateParam, get, isAdmin }} />
      {!data || (error && <div>There are no parcels for today!</div>)}
      {!error && data && (
        <ParcelsList parcels={data.parcels} isAdmin={isAdmin} />
      )}
    </>
  );
};

export default ParcelsPage;
