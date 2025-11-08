import styled from "@emotion/styled";
import { transition } from "~/styles/common/vars";

export const FormWrapper = styled.form`
  margin: 0 auto;
  padding: 20px;

  max-width: 450px;
  border-radius: 40px;
  background-color: ${({ theme }) => `${theme.colors.hi100}60`};
  backdrop-filter: blur(10px);

  transition: background-color ${transition.duration};

  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`;

export const FormName = styled.h3`
  margin-bottom: 20px;
  text-align: left;
  padding: 0 10px;
`;

export const ErrorText = styled.span`
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;

  font-size: 12px;
  color: ${({ theme }) => theme.base.error};

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const InputList = styled.ul`
  margin-bottom: 20px;
`;

export const InputItem = styled.li`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  label {
    position: absolute;

    pointer-events: none;
    top: 15px;
    left: 0px;
    min-width: 137px;

    border-radius: 20px 25px 0 0;
    padding-left: 10px;

    text-align: left;
    font-size: 14px;

    color: ${({ theme }) => theme.colors.mid100};

    background-color: ${({ theme }) => theme.colors.hi200};

    transition: all ${transition.duration};

    @media screen and (min-width: 768px) {
      top: 12px;
      font-size: 16px;
    }

    &:first-letter {
      text-transform: capitalize;
    }
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    transform: translateY(-25px);
    padding: 4px 20px 4px 10px;

    font-size: 12px;
    color: ${({ theme }) => theme.colors.lo200};

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }
  input:focus + label {
    box-shadow: ${({ theme }) => theme.colors.lo100} -3px -5px 10px -5px;
  }
`;

export const TextInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.lo200};
  background-color: ${({ theme }) => theme.colors.hi200};

  border: none;
  outline: none;

  font-size: 16px;
  border-radius: 16px;

  transition: all ${transition.duration};

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.colors.lo100} 0px 0px 10px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const FormBtnsList = styled.ul`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
`;

export const HidePasswordBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 10px;

  background-color: transparent;
  color: ${({ theme }) => theme.colors.lo100};
`;

export const GeoAddressWrapper = styled.div`
  .geoapify-autocomplete-input {
    transition: ${transition.duration};

    color: ${({ theme }) => theme.colors.lo200};
    background-color: ${({ theme }) => theme.colors.hi200};

    &:hover,
    &:focus {
      box-shadow: ${({ theme }) => theme.colors.mid100} 0px 0px 10px;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.mid100};
    }

    @media screen and (min-width: 768px) {
      &::placeholder {
        color: ${({ theme }) => theme.colors.mid100};
      }
    }
  }

  .geoapify-autocomplete-input-label.focused {
    color: ${({ theme }) => theme.colors.lo200};
  }

  .geoapify-autocomplete-items {
    background-color: ${({ theme }) => theme.colors.hi200};
    box-shadow: ${({ theme }) => theme.colors.mid100} 0px 10px 10px;

    .secondary-part {
      color: ${({ theme }) => theme.colors.lo100};
    }
  }

  .geoapify-close-button {
    color: ${({ theme }) => theme.colors.lo200};
    background-color: ${({ theme }) => theme.colors.hi200};
    opacity: 0.8;
  }
`;
