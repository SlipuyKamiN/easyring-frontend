import { useState } from "react";
import { Filter } from "./Filter";
import { useSmartSearchParams } from "~/hooks/updateSearchParams";
import { useSearchParcelsQuery } from "~/Redux/parcelsSlice";
import { ParcelsList } from "./ParcelsList";

export const ParcelsPage = () => {
  const [query, setQuery] = useState("");
  const { searchParams, updateParam, get } = useSmartSearchParams();
  const { data } = useSearchParcelsQuery(query);

  if (!data) return <div>Loading..</div>;

  return (
    <>
      <Filter props={{ setQuery, searchParams, updateParam, get }} />
      <ParcelsList parcels={data.parcels} />
    </>
  );
};
