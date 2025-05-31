import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import { PrimaryBtn } from "../Common/Button.styled";
import { FaSearch } from "react-icons/fa";
import {
  DatePickerWrapper,
  FilterInput,
  FilterInputList,
} from "./Filter.styled";
import { addDays, formatISO } from "date-fns";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { de } from "date-fns/locale";
import Select from "react-select";
import { TrackInputWrapper } from "../Home/Hero.styled";
import { useGetAllUsersQuery } from "~/Redux/authSlice";

export const Filter = ({ props }) => {
  const { setQuery, searchParams, updateParam, get, isAdmin } = props;
  const { data } = useGetAllUsersQuery("", { skip: !isAdmin });

  const driversOptions = [];

  if (data?.users) {
    data.users.map((item) =>
      driversOptions.push({ value: item, label: item.name })
    );
  }

  const onSubmit = () => {
    setQuery(searchParams.toString());
  };

  return (
    <Section>
      <Container>
        <form autoComplete="off" onSubmit={onSubmit}>
          <FilterInputList>
            <TrackInputWrapper>
              {isAdmin && (
                <FilterInput
                  onChange={(e) =>
                    updateParam("search", e.target.value.toUpperCase())
                  }
                  value={get("search")}
                  type="text"
                  id="trackingID"
                  minLength={10}
                  maxLength={10}
                  placeholder="Parcel ID"
                />
              )}
              <PrimaryBtn type="submit">
                <FaSearch size={20} />
              </PrimaryBtn>
            </TrackInputWrapper>
            <DatePickerWrapper>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={de}
              >
                <DatePicker
                  value={get("date")}
                  minDate={new Date("01.05.2025")}
                  maxDate={addDays(new Date(), 28)}
                  onChange={(data) => updateParam("date", formatISO(data))}
                  label={"Pick up date"}
                  format="dd.MM.yy"
                  slotProps={{
                    field: {
                      clearable: true,
                    },
                  }}
                />
              </LocalizationProvider>
            </DatePickerWrapper>
            {isAdmin && (
              <li>
                <Select
                  value={driversOptions.find(
                    ({ _id }) => _id === get("driver")
                  )}
                  className="react-select-container"
                  classNamePrefix="react-select"
                  placeholder="Select driver"
                  isClearable={true}
                  onChange={(e) => updateParam("driver", e?.value?._id)}
                  options={driversOptions}
                />
              </li>
            )}
          </FilterInputList>
        </form>
      </Container>
    </Section>
  );
};
