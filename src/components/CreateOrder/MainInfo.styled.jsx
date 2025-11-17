import styled from "@emotion/styled";

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
