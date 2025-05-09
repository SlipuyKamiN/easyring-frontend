import styled from "@emotion/styled";
import { colors, transition } from "~/styles/common/vars";

export const RootWrapper = styled.div`
  width: 100%;
  min-height: 100dvh;

  color: ${colors.primaryAccent};
  background-color: ${colors.secondary};

  transition: ${transition.duration};

  background-image: radial-gradient(
      circle,
      rgba(188, 230, 210, 0.4) -10%,
      rgba(255, 255, 255, 0) 70%
    ),
    radial-gradient(
      circle,
      rgba(64, 112, 205, 0.5) 0%,
      rgba(255, 255, 255, 0) 50%
    ),
    radial-gradient(
      circle,
      rgba(188, 230, 210, 0.4) -10%,
      rgba(255, 255, 255, 0) 70%
    ),
    radial-gradient(
      circle,
      rgba(64, 112, 205, 0.5) 0%,
      rgba(255, 255, 255, 0) 50%
    );
  background-position-x: -70px, -800px, calc(100dvw - 600px),
    calc(100dvw - 400px);
  background-position-y: top, -150px, 400px, 400px;
  background-size: 357px 357px, 1240px 820px, 800px 800px, 1240px 820px;
  background-repeat: no-repeat, repeat-y, no-repeat, no-repeat, no-repeat;
  /* 
  //костиль DarkMode//

  &.darkMode {
    color: ${colors.secondary};
    background-color: ${colors.primaryAccent};

    header.darkMode {
      border-bottom: 3px solid ${colors.secondary};
      box-shadow: ${colors.secondary} 0px 0px 10px;
    }

    button.darkMode {
      border-color: ${colors.secondary};

      color: ${colors.secondary};
    }

    input.darkMode {
      color: ${colors.secondary};
      border-color: ${colors.secondary};

      &::placeholder {
        color: #ffffff66;
      }
    }
  } */
`;

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  padding: 0 15px;

  outline: tomato 1px solid;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 25px;
  }
`;
