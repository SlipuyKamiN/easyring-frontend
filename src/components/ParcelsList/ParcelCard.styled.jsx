import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors, transition } from "~/styles/common/vars";

export const Card = styled.li`
  position: relative;

  padding: 20px;
  border-radius: 20px;
  background-color: ${`${colors.light.gray}60`};

  min-width: 290px;
  max-width: 300px;

  text-align: left;

  overflow: hidden;
`;

export const CardHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  margin-bottom: 10px;
`;

export const CardLink = styled(Link)`
  display: block;
  width: 180px;
`;

export const DeleteButton = styled.button`
  display: block;

  padding: 5px;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${colors.light.gray};
  color: ${colors.light.darkGray};
  transition: all ${transition.duration};

  &:hover,
  &:focus {
    color: ${colors.errorRed};
    background-color: ${colors.light.darkGray};
  }

  &:disabled {
    cursor: not-allowed;

    svg {
      color: ${colors.errorRed};
    }
  }
`;

export const CardDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-bottom: 20px;

  li p {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    span {
      font-weight: 600;
      color: ${colors.errorRed};
    }

    span.paid {
      color: ${colors.success};
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${`${colors.light.silver}bb`};
  color: ${colors.success};
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
`;
