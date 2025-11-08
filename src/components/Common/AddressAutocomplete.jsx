import { Controller } from "react-hook-form";
import { GeoAddressWrapper } from "./Form.styled";
import {
  GeoapifyContext,
  GeoapifyGeocoderAutocomplete,
} from "@geoapify/react-geocoder-autocomplete";
import { useTranslation } from "react-i18next";

export const AddressAutocomplete = ({
  control,
  setValue,
  name,
  placeholder = "form.address",
}) => {
  const { t } = useTranslation();

  return (
    <GeoAddressWrapper>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <GeoapifyContext apiKey="de6774ac4979423286c131f56e59ff31">
            <GeoapifyGeocoderAutocomplete
              placeholder={t(placeholder)}
              limit={5}
              filterByCircle={{
                lat: 52.52,
                lon: 13.405,
                radiusMeters: 30000,
              }}
              placeSelect={(value) => {
                setValue(name, value);
              }}
              value={field.value?.properties?.formatted || ""}
              debounceDelay={250}
            />
          </GeoapifyContext>
        )}
      />
    </GeoAddressWrapper>
  );
};
