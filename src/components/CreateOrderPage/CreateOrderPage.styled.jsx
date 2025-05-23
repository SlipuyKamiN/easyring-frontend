import styled from "@emotion/styled";
import { colors, transition } from "~/styles/common/vars";

export const DecorationBg = styled.div`
  width: 100%;
  border-radius: 40px;

  @media screen and (min-width: 768px) {
    background-color: ${`${colors.light.gray}60`};
    backdrop-filter: blur(10px);
  }
`;

export const FormWrapper = styled.form`
  margin: 0 auto;
  padding: 40px;

  max-width: 450px;
  border-radius: 40px;
  background-color: ${`${colors.light.gray}60`};
  backdrop-filter: blur(10px);
`;

export const FormName = styled.h3`
  margin-bottom: 20px;
  text-align: left;
`;

export const ErrorText = styled.span`
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;

  font-size: 12px;
  color: ${colors.errorRed};

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const InputItem = styled.li`
  position: relative;

  margin-bottom: 20px;

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

    color: ${colors.light.gray};

    background-color: ${colors.light.silver};

    transition: all ${transition.duration};

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    transform: translateY(-25px);
    padding: 4px 20px 4px 10px;

    font-size: 12px;
    color: ${colors.light.darkGray};

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }
  input:focus + label {
    box-shadow: -3px -5px 10px -5px;
  }
`;

export const TextInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 20px;
  background-color: ${colors.light.silver};

  border: none;
  outline: none;

  font-size: 14px;
  border-radius: 16px;

  &:hover,
  &:focus {
    box-shadow: ${colors.light.darkGray} 0px 0px 10px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
