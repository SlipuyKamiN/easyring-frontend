import { DecorationBg } from "../../pages/CreateOrderPage.styled";
import {
  InputListItem,
  MuiPickerWrapper,
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
import { addDays, addHours, formatISO, isValid } from "date-fns";
import { PrimaryBtn, SecondaryBtnLink } from "../Common/Button.styled";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { mainInfoSchema } from "~/schemas/newParcelSchema";
import { useNavigate } from "react-router-dom";
import { ValidationErrorText } from "../SharedLayout/ValidationErrorText";
import { useDispatch, useSelector } from "react-redux";
import { updMainInfo } from "~/Redux/newParcelSlice";
import {
  combineDateTime,
  getMinDate,
  getMinTime,
  parceInitialDate,
} from "~/helpers/combineDateTime";
import { getNewParcelState } from "~/Redux/selectors";
import { FormWrapper, InputList, FormBtnsList } from "../Common/Form.styled";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const MainInfo = () => {
  const { t } = useTranslation();
  const {
    mainInfo: { size, date, startTime, endTime, description },
  } = useSelector(getNewParcelState);

  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      size,
      date: parceInitialDate(date),
      startTime: parceInitialDate(startTime),
      endTime: parceInitialDate(endTime),
      description,
    },
    resolver: yupResolver(mainInfoSchema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedStartTime = watch("startTime");
  const selectedEndTime = watch("endTime");

  useEffect(() => {
    if (!selectedStartTime) return;
    if (!selectedEndTime) return;

    const minEnd = addHours(selectedStartTime, 1);

    if (selectedEndTime < minEnd) {
      setValue("endTime", minEnd, { shouldValidate: true });
    }
  }, [selectedStartTime, selectedEndTime, setValue]);

  const onSubmit = (data) => {
    data.startTime = combineDateTime(data.date, data.startTime);
    data.endTime = combineDateTime(data.date, data.endTime);
    data.date = formatISO(data.date);

    dispatch(updMainInfo(data));
    navigate("/createorder/sender");
  };

  return (
    <DecorationBg>
      <FormWrapper autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <InputList>
          <li>
            <SizeLabel>{t("form.mainInfo.size")}</SizeLabel>
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
            <MuiPickerWrapper>
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
                      minDate={getMinDate()}
                      maxDate={addDays(new Date(), 14)}
                      label={t("form.mainInfo.date")}
                      format="dd.MM.yy"
                      slotProps={{
                        field: {
                          readOnly: true,
                          clearable: true,
                          variant: "outlined",
                        },
                      }}
                    />
                  )}
                />
                <ValidationErrorText inputError={errors.date} />
              </LocalizationProvider>
            </MuiPickerWrapper>
          </InputListItem>
          <InputListItem>
            <TimePickerWrapper>
              <MuiPickerWrapper>
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  adapterLocale={de}
                >
                  <Controller
                    name={"startTime"}
                    placeholder="qwe"
                    control={control}
                    render={({ field }) => (
                      <TimePicker
                        {...field}
                        label={t("form.mainInfo.startTime")}
                        minutesStep={30}
                        minTime={getMinTime(watch("date"))}
                        maxTime={new Date(0, 0, 0, 19, 0)}
                        slotProps={{
                          field: {
                            readOnly: true,
                            clearable: true,
                          },
                        }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </MuiPickerWrapper>
              <MuiPickerWrapper>
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
                        ? addHours(startTime, 1)
                        : new Date(0, 0, 0, 10, 0);

                      return (
                        <TimePicker
                          {...field}
                          disabled={!isValid(startTime)}
                          label={t("form.mainInfo.endTime")}
                          minutesStep={30}
                          minTime={minEndTime}
                          maxTime={new Date(0, 0, 0, 20, 0)}
                          slotProps={{
                            field: {
                              readOnly: true,
                              clearable: true,
                            },
                          }}
                        />
                      );
                    }}
                  />
                </LocalizationProvider>
              </MuiPickerWrapper>
            </TimePickerWrapper>
            <ValidationErrorText
              inputError={errors.startTime || errors.endTime}
            />
          </InputListItem>
          <li>
            <ParcelDescription
              {...register("description")}
              type="text"
              placeholder={t("form.mainInfo.description")}
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
            <PrimaryBtn
              className="plausible-event-name=main-info"
              type="Submit"
            >
              {t("form.nav.next")}
            </PrimaryBtn>
          </li>
          <li>
            <SecondaryBtnLink to={"/"}>{t("form.nav.cancel")}</SecondaryBtnLink>
          </li>
        </FormBtnsList>
      </FormWrapper>
    </DecorationBg>
  );
};
