import { Filter } from "~/components/ParcelsList/Filter";
import { useSmartSearchParams } from "~/hooks/useSmartSearchParams";
import { useSearchParcelsQuery } from "~/Redux/parcelsSlice";
import { ParcelsList } from "~/components/ParcelsList/ParcelsList";
import { useSelector } from "react-redux";
import { getUserState } from "~/Redux/userSelectors";
import { useState } from "react";

const ParcelsPage = () => {
  const user = useSelector(getUserState);
  const isAdmin = user.role === "admin";
  const { searchParams, updateParam, get } = useSmartSearchParams();
  const [query, setQuery] = useState(searchParams.toString());
  const { data } = useSearchParcelsQuery(query);

  return (
    <>
      <Filter props={{ setQuery, searchParams, updateParam, get, isAdmin }} />
      {!data && <div>There are no parcels for today!</div>}
      {data && <ParcelsList parcels={data.parcels} isAdmin={isAdmin} />}
    </>
  );
};

export default ParcelsPage;
