import { useEffect, useState } from "react";
import { Filter } from "~/components/ParcelsList/Filter";
import { useSmartSearchParams } from "~/hooks/useSmartSearchParams";
import { useSearchParcelsQuery } from "~/Redux/parcelsSlice";
import { ParcelsList } from "~/components/ParcelsList/ParcelsList";
import { useSelector } from "react-redux";
import { getUserState } from "~/Redux/userSelectors";
import { getDefaultSearchParams } from "~/helpers/getDefaultSearchParams";

const ParcelsPage = () => {
  const user = useSelector(getUserState);
  const isAdmin = user.role === "admin";
  const [query, setQuery] = useState(
    isAdmin ? "" : getDefaultSearchParams(user._id)
  );
  const { searchParams, updateParam, get } = useSmartSearchParams(
    !isAdmin && getDefaultSearchParams(user._id)
  );
  const { data } = useSearchParcelsQuery(query);

  useEffect(() => {
    if (searchParams.size >= 1 && query === "") {
      setQuery(searchParams.toString());
    }
  }, [query, searchParams]);

  if (!data) return <div>Loading..</div>;

  return (
    <>
      <Filter props={{ setQuery, searchParams, updateParam, get, isAdmin }} />
      <ParcelsList parcels={data.parcels} isAdmin={isAdmin} />
    </>
  );
};

export default ParcelsPage;
