import { useEffect, useState } from "react";
import { Filter } from "~/components/ParcelsList/Filter";
import { useSmartSearchParams } from "~/hooks/updateSearchParams";
import { useSearchParcelsQuery } from "~/Redux/parcelsSlice";
import { ParcelsList } from "~/components/ParcelsList/ParcelsList";

const ParcelsPage = () => {
  const [query, setQuery] = useState("");
  const { searchParams, updateParam, get } = useSmartSearchParams();
  const { data } = useSearchParcelsQuery(query);

  useEffect(() => {
    if (searchParams.size >= 1 && query === "") {
      setQuery(searchParams.toString());
    }
  }, [query, searchParams]);

  if (!data) return <div>Loading..</div>;

  return (
    <>
      <Filter props={{ setQuery, searchParams, updateParam, get }} />
      <ParcelsList parcels={data.parcels} />
    </>
  );
};

export default ParcelsPage;
