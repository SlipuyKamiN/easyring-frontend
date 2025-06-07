import { Filter } from "~/components/ParcelsList/Filter";
import { useSmartSearchParams } from "~/hooks/useSmartSearchParams";
import { useSearchParcelsQuery } from "~/Redux/parcelsSlice";
import { ParcelsList } from "~/components/ParcelsList/ParcelsList";
import { useSelector } from "react-redux";
import { getUserState } from "~/Redux/userSelectors";
import { useEffect, useState } from "react";
import { LoadingSection } from "~/components/Common/LoadingSection";
import { EmptySection } from "~/components/Common/EmptySection";
import { notification } from "~/components/Common/notification";

const ParcelsPage = () => {
  const user = useSelector(getUserState);
  const isAdmin = user.role === "admin";
  const { searchParams, updateParam, get } = useSmartSearchParams(user);
  const [query, setQuery] = useState("");
  const { data, error, isLoading } = useSearchParcelsQuery(query);
  const isData = data && !error;

  useEffect(() => {
    if (searchParams.size >= 1 && !query) {
      setQuery(searchParams.toString());
    }
  }, [query, searchParams]);

  useEffect(() => {
    if (error) {
      notification(error.data.message);
    }
  }, [error]);

  return (
    <>
      <Filter props={{ setQuery, searchParams, updateParam, get, isAdmin }} />
      {!error && isLoading && <LoadingSection />}
      {!isData && !isLoading && <EmptySection />}
      {isData && !isLoading && (
        <ParcelsList parcels={data.parcels} isAdmin={isAdmin} />
      )}
    </>
  );
};

export default ParcelsPage;
