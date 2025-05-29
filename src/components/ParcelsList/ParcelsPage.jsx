import { useState } from "react";
import { Filter } from "./Filter";
import { useSmartSearchParams } from "~/hooks/updateSearchParams";
import { useSearchParcelsQuery } from "~/Redux/parcelsSlice";

export const ParcelsPage = () => {
  const [query, setQuery] = useState("");
  const { searchParams, updateParam, get } = useSmartSearchParams();
  const { data: parcels } = useSearchParcelsQuery(query);

  console.log(parcels);

  return (
    <>
      <Filter props={{ setQuery, searchParams, updateParam, get }} />
    </>
  );
};
