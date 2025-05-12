import {
  ArrowLogo,
  FirstLetterLogo,
  LogoLink,
  SubLogo,
} from "./PageLogo.styled";

export const PageLogo = () => {
  return (
    <LogoLink to={"/"}>
      <FirstLetterLogo>e</FirstLetterLogo>asyRing<ArrowLogo>↺</ArrowLogo>
      <SubLogo>delivery</SubLogo>
    </LogoLink>
  );
};
