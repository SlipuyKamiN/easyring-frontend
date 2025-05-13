import { Link } from "react-router-dom";
import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import { FormWrapper } from "./CreateOrderPage.styled";
import {
  ParcelDescription,
  SizeButton,
  SizeButtonsList,
  SizeDescription,
  SizeInput,
  SizeLabel,
  SizeText,
} from "./MainInfo.styled";
import { TbBoxAlignBottomRight, TbBoxAlignBottom } from "react-icons/tb";
import { BsBox } from "react-icons/bs";
import DatePicker from "react-date-picker";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import { useState } from "react";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css";
import "react-clock/dist/Clock.css";

export const MainInfo = () => {
  const [dateValue, onDateChange] = useState(new Date());
  const [timeValue, onTimeChange] = useState(["10:00", "11:00"]);

  console.log(dateValue, timeValue);

  const today = new Date();
  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 14);

  return (
    <Section>
      <Container>
        <FormWrapper>
          <ul>
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
            <li>
              <SizeLabel htmlFor="date">Select date:</SizeLabel>
              <DatePicker
                id="date"
                format="dd.MM"
                minDate={today}
                maxDate={nextWeek}
                maxDetail="month"
                required
                calendarProps={{
                  minDetail: "month",
                }}
                onChange={onDateChange}
                value={dateValue}
              />
            </li>
            <li>
              <SizeLabel htmlFor="time">Select delivery time:</SizeLabel>
              <TimeRangePicker
                disableClock
                maxDetail="minute"
                minTime="08:00:00"
                maxTime="20:00:00"
                required
                onChange={onTimeChange}
                value={timeValue}
              />
            </li>
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
          </ul>
          <ul>
            <li>
              <Link>{"=>"}</Link>
            </li>
          </ul>
        </FormWrapper>
      </Container>
    </Section>
  );
};
