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

export const ProgressBar = () => {
  return (
    <ProgressSection>
      <Container>
        <ProgressList>
          <ProgressItem>
            <ProgressLink to="maininfo">
              <LuBox size={30} />
            </ProgressLink>
          </ProgressItem>
          <ProgressItem>
            <ProgressLink to="sender">
              <TbMapPinShare size={30} />
            </ProgressLink>
          </ProgressItem>
          <ProgressItem>
            <ProgressLink to="recipient">
              <TbMapPinDown size={30} />
            </ProgressLink>
          </ProgressItem>
          <ProgressItem>
            <ProgressLink to="confirm">
              <GoChecklist size={30} />
            </ProgressLink>
          </ProgressItem>
        </ProgressList>
      </Container>
    </ProgressSection>
  );
};
