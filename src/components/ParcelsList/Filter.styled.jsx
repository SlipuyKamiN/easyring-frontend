import styled from "@emotion/styled";
import { TrackInput } from "../Home/Hero.styled";

export const FilterInputList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const FilterInput = styled(TrackInput)`
  max-width: 186px;
  height: 56px;
  border-radius: 16px;
`;

export const DatePickerWrapper = styled.li`
  max-width: 175px;
`;
