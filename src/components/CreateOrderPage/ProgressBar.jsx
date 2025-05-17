import { Container } from "../SharedLayout/SharedLayout.styled";
import {
  ProgressItem,
  ProgressLink,
  ProgressList,
  ProgressSection,
} from "./ProgressBar.styled";
import { TbMapPinShare, TbMapPinDown } from "react-icons/tb";
import { GoChecklist } from "react-icons/go";
import { LuBox } from "react-icons/lu";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const ProgressBar = () => {
  const [pos, setPos] = useState(0);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/createorder/maininfo":
        setPos(1);
        break;
      case "/createorder/sender":
        setPos(2);
        break;
      case "/createorder/recipient":
        setPos(3);
        break;
      case "/createorder/confirm":
        setPos(4);
        break;
      default:
        setPos(0);
        break;
    }
  }, [location.pathname]);

  return (
    <ProgressSection>
      <Container>
        <ProgressList>
          <ProgressItem>
            <ProgressLink to="maininfo" className={pos >= 1 && "active"}>
              <LuBox size={30} />
            </ProgressLink>
          </ProgressItem>
          <ProgressItem>
            <ProgressLink to="sender" className={pos >= 2 && "active"}>
              <TbMapPinShare size={30} />
            </ProgressLink>
          </ProgressItem>
          <ProgressItem>
            <ProgressLink to="recipient" className={pos >= 3 && "active"}>
              <TbMapPinDown size={30} />
            </ProgressLink>
          </ProgressItem>
          <ProgressItem>
            <ProgressLink to="confirm" className={pos >= 4 && "active"}>
              <GoChecklist size={30} />
            </ProgressLink>
          </ProgressItem>
        </ProgressList>
      </Container>
    </ProgressSection>
  );
};
