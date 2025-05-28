import { PageLogo } from "../Common/PageLogo";
import { SocialsLinks } from "../Common/SocialsLinks";
import {
  AddressListItem,
  FooterContainer,
  PageFooter,
  ReactLink,
} from "./Footer.styled";
import { FaReact } from "react-icons/fa";

export const Footer = () => {
  return (
    <PageFooter>
      <FooterContainer>
        <PageLogo />
        <SocialsLinks />
        <address>
          <ul>
            <AddressListItem>
              <a href="mailto:easyring.delivery@gmail.com">
                easyring.delivery@gmail.com
              </a>
            </AddressListItem>
            <AddressListItem>
              <a
                href="https://maps.app.goo.gl/2VGmNYackyGca28r6"
                target="_blank"
                rel="noopener nofollow noreferrer"
              >
                Kaulbachstr. 6A, 12247 Berlin
              </a>
            </AddressListItem>
          </ul>
        </address>
        <ReactLink to={"/signin"}>
          <FaReact size={36} />
        </ReactLink>
      </FooterContainer>
    </PageFooter>
  );
};
