import { PageLogo } from "../Common/PageLogo";
import { SocialsLinks } from "../Common/SocialsLinks";
import { AddressListItem, FooterContainer, PageFooter } from "./Footer.styled";

export const Footer = () => {
  return (
    <PageFooter>
      <FooterContainer>
        <PageLogo />
        <SocialsLinks />
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
