import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  padding: 60px 0 0;

  outline: tomato 1px solid;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 78px 0 0;
  }
`;
