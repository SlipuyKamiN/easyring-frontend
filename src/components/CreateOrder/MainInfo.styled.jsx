import styled from "@emotion/styled";
import { transition } from "~/styles/common/vars";

export const SizeButtonsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  margin-bottom: 20px;
`;

export const SizeLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const SizeButton = styled.label`
  position: relative;

  display: block;
  height: 60px;
  width: 60px;

  border-radius: 14px;
  background-color: ${({ theme }) => theme.colors.hi200};

  overflow: hidden;

  cursor: pointer;

  transition: all ${transition.duration};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.mid100};
  }

  &:hover > span,
  &:focus > span,
  &:hover > svg,
  &:focus > svg {
    color: ${({ theme }) => theme.colors.lo200};
  }

  @media screen and (min-width: 768px) {
    height: 80px;
    width: 80px;
  }
`;

export const SizeInput = styled.input`
  visibility: hidden;
  width: 100%;
  height: 100%;

  &:checked + span {
    color: ${({ theme }) => theme.colors.hi200};
    background-color: ${({ theme }) => theme.colors.lo100};

    & + span {
      color: ${({ theme }) => theme.colors.hi200};
    }

    & svg {
      opacity: 0.5;
    }
  }
`;

export const SizeText = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding-left: 4px;

  text-align: left;
  font-size: 50px;
  line-height: 1;
  font-weight: 800;
  transition: all ${transition.duration};
  color: ${({ theme }) => `${theme.colors.lo200}60`};

  & svg {
    position: absolute;
    top: 25px;
    left: 25px;
  }

  @media screen and (min-width: 768px) {
    font-size: 60px;
    padding-left: 6px;

    & svg {
      width: 50px;
      height: 50px;

      top: 30px;
      left: 30px;
    }
  }
`;

export const SizeDescription = styled.span`
  position: absolute;
  bottom: 5px;
  left: 6px;
  font-size: 10px;

  transition: all ${transition.duration};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    bottom: 8px;
    left: 8px;
  }
`;

export const ParcelDescription = styled.textarea`
  width: 100%;
  min-height: 56px;
  padding: 10px 15px;
  border: none;
  border-radius: 16px;

  font-family: inherit;
  font-size: 16px;
  resize: none;

  outline: none;
  color: ${({ theme }) => theme.colors.lo200};
  background-color: ${({ theme }) => theme.colors.hi200};

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.colors.lo100} 0px 0px 10px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const InputListItem = styled.li`
  max-width: 100%;
  margin: 0 auto 20px;
`;

export const TimePickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const MuiPickerWrapper = styled.div`
  max-width: 284px;
  margin: 0 auto;

  .MuiFormControl-root.Mui-focused {
    box-shadow: ${({ theme }) => theme.colors.mid100} 0px 0px 10px;
  }

  .MuiFormControl-root .MuiFormLabel-root.MuiInputLabel-root {
    &.Mui-focused,
    &.MuiFormLabel-filled {
      box-shadow: ${({ theme }) => theme.colors.mid100} -3px -5px 10px -5px;
      background-color: ${({ theme }) => theme.colors.hi200};
    }

    &.MuiFormLabel-filled {
      box-shadow: none;
      background-color: ${({ theme }) => theme.colors.hi200};
    }
  }

  .MuiPickersInputBase-root.MuiPickersOutlinedInput-root {
    background-color: ${({ theme }) => theme.colors.hi200};
  }

  .Mui-focused {
    color: ${({ theme }) => theme.colors.lo200} !important;
  }

  .MuiPickersOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.colors.lo200} !important;
  }
`;
