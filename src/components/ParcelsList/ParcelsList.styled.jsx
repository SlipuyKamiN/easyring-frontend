import styled from "@emotion/styled";

export const CardList = styled.ul`
  display: none;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
