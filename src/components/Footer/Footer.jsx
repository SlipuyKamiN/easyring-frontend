import { PageLogo } from "../Common/PageLogo";
import {
  AddressListItem,
  FooterContainer,
  PageFooter,
  IconLink,
  SocialsList,
} from "./Footer.styled";
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <PageFooter>
      <FooterContainer>
        <PageLogo />
        <SocialsList>
          <li>
            <IconLink
              href="http://"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              <FaWhatsapp size={35} />
            </IconLink>
          </li>
          <li>
            <IconLink
              href="http://"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              <FaTelegramPlane size={35} />
            </IconLink>
          </li>
          <li>
            <IconLink
              href="http://"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              <FaInstagram size={35} />
            </IconLink>
          </li>
        </SocialsList>
        <address>
          <ul>
            <AddressListItem>
              <a
                href="https://maps.app.goo.gl/2VGmNYackyGca28r6"
                target="_blank"
                rel="noopener nofollow noreferrer"
              >
                Kaulbachstr. 6A, 12247 Berlin
              </a>
            </AddressListItem>
            <AddressListItem>
              <a href="mailto:easyring.delivery@gmail.com">
                easyring.delivery@gmail.com
              </a>
            </AddressListItem>
            <AddressListItem>
              <a href="tel:+491781515156">+491781515156</a>
            </AddressListItem>
          </ul>
        </address>
      </FooterContainer>
    </PageFooter>
  );
};
