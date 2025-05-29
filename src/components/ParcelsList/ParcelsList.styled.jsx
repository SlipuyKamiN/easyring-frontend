import styled from "@emotion/styled";

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;
