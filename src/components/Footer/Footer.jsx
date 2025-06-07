import { useLogoutMutation } from "~/Redux/authSlice";
import { PageLogo } from "../Common/PageLogo";
import { SocialsLinks } from "../Common/SocialsLinks";
import {
  AddressListItem,
  FooterContainer,
  PageFooter,
  ReactLink,
} from "./Footer.styled";
import { FaReact } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getUserState } from "~/Redux/selectors";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector(getUserState);

  console.log("isLoggedIn", isLoggedIn);

  const onClick = () => {
    if (isLoggedIn) return logout();
    navigate("/auth/signin");
  };

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
        <ReactLink onClick={onClick}>
          <FaReact size={36} />
        </ReactLink>
      </FooterContainer>
    </PageFooter>
  );
};
