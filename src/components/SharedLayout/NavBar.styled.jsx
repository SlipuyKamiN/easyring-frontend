import styled from "@emotion/styled";

export const NavBarList = styled.ul`
  display: flex;
  justify-content: center;

  margin: 0 auto;
  gap: 40px;

  text-transform: uppercase;
  font-size: 14px;

  background-color: #fff;
`;

export const NavLinkBtn = styled.button`
  background-color: transparent;

  position: relative;
  padding: 10px 20px;
  z-index: 2;

  text-transform: uppercase;

  &:hover,
  &:focus {
    border-bottom: 1px solid black;
  }

  ul {
    pointer-events: none;
    position: absolute;
    z-index: 1;
    opacity: 0;
    transform: translateY(-80px);
    background-color: #ffffffff;
    padding: 10px;

    transition-property: opacity, transform;
    transition-duration: 100ms, 300ms;
    transition-delay: linear;

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
    pointer-events: all;

    transform: translateY(10px);
    opacity: 1;
  }
`;
