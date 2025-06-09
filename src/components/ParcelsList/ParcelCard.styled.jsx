import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { transition } from "~/styles/common/vars";

export const Card = styled.li`
  position: relative;

  padding: 20px;
  border-radius: 20px;

  color: ${({ theme }) => theme.colors.lo100};
  background-color: ${({ theme }) => `${theme.colors.hi100}60`};

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

  color: ${({ theme }) => theme.colors.lo200};
`;

export const DeleteButton = styled.button`
  display: block;

  padding: 5px;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.hi200};
  color: ${({ theme }) => theme.colors.lo100};
  transition: all ${transition.duration};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.base.error};
    background-color: ${({ theme }) => theme.colors.hi100};
  }

  &:disabled,
  &:disabled:hover,
  &:disabled:focus {
    cursor: not-allowed;

    color: ${({ theme }) => theme.base.error};
    background-color: ${({ theme }) => theme.colors.hi100};
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
      color: ${({ theme }) => theme.base.error};
    }

    span.paid {
      color: ${({ theme }) => theme.base.success};
    }
  }
`;

export const CheckedOverlay = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;

  background-color: ${({ theme }) => `${theme.colors.hi100}60`};
  color: ${({ theme }) => theme.base.success};
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
`;
