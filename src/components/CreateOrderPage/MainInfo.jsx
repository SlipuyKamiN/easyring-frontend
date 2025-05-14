import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import { FormWrapper } from "./CreateOrderPage.styled";
import {
  FormBtnsList,
  InputList,
  InputListItem,
  ParcelDescription,
  SizeButton,
  SizeButtonsList,
  SizeDescription,
  SizeInput,
  SizeLabel,
  SizeText,
  TimePickerWrapper,
} from "./MainInfo.styled";
import { TbBoxAlignBottomRight, TbBoxAlignBottom } from "react-icons/tb";
import { BsBox } from "react-icons/bs";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { de } from "date-fns/locale/de";
import { addDays } from "date-fns";
import { PrimaryBtn, SecondaryBtnLink } from "../Common/Button.styled";

export const MainInfo = () => {
  return (
    <Section>
      <Container>
        <FormWrapper>
          <InputList>
            <li>
              <SizeLabel htmlFor="size">Select size to:</SizeLabel>
              <SizeButtonsList>
                <li>
                  <SizeButton htmlFor="S">
                    <SizeInput type="radio" name="size" id="S" />
                    <SizeText>
                      <TbBoxAlignBottomRight size={36} />S
                    </SizeText>
                    <SizeDescription>2kg</SizeDescription>
                  </SizeButton>
                </li>
                <li>
                  <SizeButton htmlFor="M">
                    <SizeInput type="radio" name="size" id="M" />
                    <SizeText>
                      <TbBoxAlignBottom size={36} />M
                    </SizeText>
                    <SizeDescription>10kg</SizeDescription>
                  </SizeButton>
                </li>
                <li>
                  <SizeButton htmlFor="L">
                    <SizeInput type="radio" name="size" id="L" />
                    <SizeText>
                      <BsBox size={36} />L
                    </SizeText>
                    <SizeDescription>30kg</SizeDescription>
                  </SizeButton>
                </li>
              </SizeButtonsList>
            </li>
            <InputListItem>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={de}
              >
                <DatePicker
                  minDate={new Date()}
                  maxDate={addDays(new Date(), 14)}
                  label={"Pick up date"}
                  format="dd.MM"
                  required
                  slotProps={{
                    field: {
                      clearable: true,
                      fullWidth: true,
                    },
                  }}
                />
              </LocalizationProvider>
            </InputListItem>
            <InputListItem>
              <TimePickerWrapper>
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  adapterLocale={de}
                >
                  <TimePicker
                    label={"Delivery from"}
                    minutesStep={30}
                    minTime={new Date(0, 0, 0, 8, 0)}
                    maxTime={new Date(0, 0, 0, 20, 0)}
                    slotProps={{ field: { clearable: true } }}
                  />
                </LocalizationProvider>
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  adapterLocale={de}
                >
                  <TimePicker
                    label={"until"}
                    minutesStep={30}
                    minTime={new Date(0, 0, 0, 8, 0)}
                    maxTime={new Date(0, 0, 0, 20, 0)}
                    slotProps={{
                      field: {
                        clearable: true,
                        variant: "outlined",
                      },
                    }}
                  />
                </LocalizationProvider>
              </TimePickerWrapper>
            </InputListItem>
            <li>
              <ParcelDescription
                type="text"
                placeholder="Parcel description"
                rows={1}
                onInput={(e) => {
                  e.currentTarget.style.height = "auto";
                  e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
                }}
              />
            </li>
          </InputList>
          <FormBtnsList>
            <li>
              <SecondaryBtnLink to={"/"}>Cancel</SecondaryBtnLink>
            </li>
            <li>
              <PrimaryBtn>Next</PrimaryBtn>
            </li>
          </FormBtnsList>
        </FormWrapper>
      </Container>
    </Section>
  );
};
