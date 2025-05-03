import styled from "@emotion/styled";

export const NavBarList = styled.ul`
  display: flex;
  justify-content: center;

  margin: 0 auto;
  padding: 100px 0 40px;
  gap: 40px;

  text-transform: uppercase;
  font-size: 14px;
`;

export const NavLinkBtn = styled.a`
  position: relative;
  padding: 10px;
  z-index: 2;

  ul {
    position: absolute;
    z-index: 1;
    opacity: 0;
    transform: translateY(-80px);
    transition: opacity 300ms linear, transform 250ms linear;

    li,
    a {
      padding: 10px 0;
    }

    a:hover,
    a:focus {
      color: tomato;
    }
  }

  &:hover ul,
  &:focus ul {
    transform: translateY(0);
    opacity: 1;
  }
`;
