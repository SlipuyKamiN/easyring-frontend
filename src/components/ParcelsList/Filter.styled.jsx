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

  background: none;
  background-color: ${({ theme }) => theme.colors.hi200};
  color: ${({ theme }) => theme.colors.lo200};

  &::placeholder {
    color: ${({ theme }) => theme.colors.lo200};
  }
`;

export const DatePickerWrapper = styled.li`
  max-width: 175px;
`;

export const SelectWrapper = styled.div`
  .react-select-container .react-select__control {
    background-color: ${({ theme }) => theme.colors.hi200};

    &--is-focused {
      box-shadow: ${({ theme }) => theme.colors.mid100} 0px 0px 10px;
    }
  }

  .react-nav-select-container .react-nav-select__single-value {
    color: ${({ theme }) => theme.colors.mid100};
  }

  .react-select__menu-list,
  .react-nav-select__menu-list {
    background-color: ${({ theme }) => theme.colors.hi200};
  }

  .react-select__option,
  .react-nav-select__option {
    color: ${({ theme }) => theme.colors.lo200};

    &--is-selected,
    &--is-focused,
    &--is-selected,
    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.mid100};
      color: ${({ theme }) => theme.colors.hi200};
    }
  }
`;
