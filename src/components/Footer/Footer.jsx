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
              href="https://wa.me/491781516236"
              target="_blank"
              rel="noopener nofollow noreferrer"
              className="whats-app"
            >
              <FaWhatsapp size={35} />
            </IconLink>
          </li>
          <li>
            <IconLink
              href="https://t.me/@easyRing_delivery"
              target="_blank"
              rel="noopener nofollow noreferrer"
              className="telegram"
            >
              <FaTelegramPlane size={35} />
            </IconLink>
          </li>
          <li>
            <IconLink
              href="https://www.instagram.com/easyring.delivery/"
              target="_blank"
              rel="noopener nofollow noreferrer"
              className="instagram"
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
              <a href="tel:+491781516236">+491781516236</a>
            </AddressListItem>
          </ul>
        </address>
      </FooterContainer>
    </PageFooter>
  );
};
