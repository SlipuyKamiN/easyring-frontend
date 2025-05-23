import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import { DecorationBg, FormWrapper } from "./CreateOrderPage.styled";
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
import { addDays, addHours, formatISO, isValid, parseISO } from "date-fns";
import { PrimaryBtn, SecondaryBtnLink } from "../Common/Button.styled";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { mainInfoSchema } from "~/schemas/newParcelSchema";
import { useNavigate } from "react-router-dom";
import { ValidationErrorText } from "../SharedLayout/ValidationErrorText";
import { useDispatch, useSelector } from "react-redux";
import { updMainInfo } from "~/Redux/newParcelSlice";
import { combineDateTime } from "~/helpers/combineDateTime";

export const MainInfo = () => {
  const { size, date, startTime, endTime, description } = useSelector(
    ({ newParcel }) => newParcel.mainInfo
  );

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      size,
      date: parseISO(date),
      startTime: parseISO(startTime),
      endTime: parseISO(endTime),
      description,
    },
    resolver: yupResolver(mainInfoSchema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    data.startTime = combineDateTime(data.date, data.startTime);
    data.endTime = combineDateTime(data.date, data.endTime);
    data.date = formatISO(data.date);

    dispatch(updMainInfo(data));
    navigate("/createorder/sender");
  };

  return (
    <Section>
      <Container>
        <DecorationBg>
          <FormWrapper autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <InputList>
              <li>
                <SizeLabel>Select size to:</SizeLabel>
                <SizeButtonsList>
                  <li>
                    <SizeButton>
                      <SizeInput
                        type="radio"
                        name="size"
                        value={"S"}
                        {...register("size")}
                      />
                      <SizeText>
                        <TbBoxAlignBottomRight size={36} />S
                      </SizeText>
                      <SizeDescription>2kg</SizeDescription>
                    </SizeButton>
                  </li>
                  <li>
                    <SizeButton>
                      <SizeInput
                        type="radio"
                        name="size"
                        value={"M"}
                        {...register("size")}
                      />
                      <SizeText>
                        <TbBoxAlignBottom size={36} />M
                      </SizeText>
                      <SizeDescription>10kg</SizeDescription>
                    </SizeButton>
                  </li>
                  <li>
                    <SizeButton>
                      <SizeInput
                        type="radio"
                        name="size"
                        value={"L"}
                        {...register("size")}
                      />
                      <SizeText>
                        <BsBox size={36} />L
                      </SizeText>
                      <SizeDescription>30kg</SizeDescription>
                    </SizeButton>
                  </li>
                </SizeButtonsList>
                <ValidationErrorText inputError={errors.size} />
              </li>
              <InputListItem>
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  adapterLocale={de}
                >
                  <Controller
                    name="date"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        {...field}
                        minDate={new Date()}
                        maxDate={addDays(new Date(), 14)}
                        label={"Pick up date"}
                        format="dd.MM.yy"
                        slotProps={{
                          field: {
                            clearable: true,
                          },
                        }}
                      />
                    )}
                  />
                  <ValidationErrorText inputError={errors.date} />
                </LocalizationProvider>
              </InputListItem>
              <InputListItem>
                <TimePickerWrapper>
                  <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    adapterLocale={de}
                  >
                    <Controller
                      name={"startTime"}
                      control={control}
                      render={({ field }) => (
                        <TimePicker
                          {...field}
                          label={"Delivery from"}
                          minutesStep={30}
                          minTime={new Date(0, 0, 0, 8, 0)}
                          maxTime={new Date(0, 0, 0, 20, 0)}
                          slotProps={{ field: { clearable: true } }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                  <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    adapterLocale={de}
                  >
                    <Controller
                      name={"endTime"}
                      control={control}
                      render={({ field }) => {
                        const startTime = watch("startTime");
                        const minEndTime = startTime
                          ? addHours(startTime, 2)
                          : new Date(0, 0, 0, 8, 0);

                        return (
                          <TimePicker
                            {...field}
                            disabled={!isValid(startTime)}
                            label={"until"}
                            minutesStep={30}
                            minTime={minEndTime}
                            maxTime={new Date(0, 0, 0, 22, 0)}
                            slotProps={{
                              field: {
                                clearable: true,
                                variant: "outlined",
                              },
                            }}
                          />
                        );
                      }}
                    />
                  </LocalizationProvider>
                </TimePickerWrapper>
                <ValidationErrorText
                  inputError={errors.startTime || errors.endTime}
                />
              </InputListItem>
              <li>
                <ParcelDescription
                  {...register("description")}
                  type="text"
                  placeholder="Parcel description"
                  rows={1}
                  onInput={(e) => {
                    e.currentTarget.style.height = "auto";
                    e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
                  }}
                />
                <ValidationErrorText inputError={errors.description} />
              </li>
            </InputList>
            <FormBtnsList>
              <li>
                <PrimaryBtn type="Submit">Next</PrimaryBtn>
              </li>
              <li>
                <SecondaryBtnLink to={"/"}>Cancel</SecondaryBtnLink>
              </li>
            </FormBtnsList>
          </FormWrapper>
        </DecorationBg>
      </Container>
    </Section>
  );
};
