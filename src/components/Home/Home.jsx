import { Container } from "../SharedLayout/SharedLayout.styled";
import {
  BenefitItem,
  BenefitsList,
  HeroBtnsList,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
  SectionTitle,
  TrackInput,
  TrackInputWrapper,
} from "./Home.styled";
import {
  BtnLink,
  SecondaryBtn,
  SecondaryBtnLink,
} from "../Common/Button.styled";
import { FaSearch } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { BsCashCoin } from "react-icons/bs";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { TbTruckDelivery } from "react-icons/tb";
import { FaFlagCheckered } from "react-icons/fa";
import { useState } from "react";

export const Home = () => {
  const [inputVisible, setInputVisible] = useState(false);

  return (
    <Container>
      <HeroSection>
        <HeroTitle>
          S<span>a</span>m<span>e</span> d<span>a</span>y d<span>e</span>liv
          <span>e</span>ry
        </HeroTitle>
        <HeroSubtitle>in Berlin</HeroSubtitle>
        <HeroBtnsList>
          <li>
            <BtnLink to={"createorder/maininfo"}>Create order</BtnLink>
          </li>
          {!inputVisible && (
            <li>
              <SecondaryBtn onClick={() => setInputVisible(!inputVisible)}>
                Track order
              </SecondaryBtn>
            </li>
          )}
          {inputVisible && (
            <TrackInputWrapper>
              <TrackInput
                type="text"
                id="orderID"
                placeholder="Track by ID#132"
              />
              <SecondaryBtnLink to={"orders/1"}>
                <FaSearch size={16} />
              </SecondaryBtnLink>
            </TrackInputWrapper>
          )}
        </HeroBtnsList>
      </HeroSection>
      <section>
        <SectionTitle>How it works?</SectionTitle>
        <BenefitsList>
          <BenefitItem>
            <HiOutlineClipboardDocumentList size={60} />
            <h3>Fill the form</h3>
            <p>First, describe the parcel, sender`s and recipient`s info.</p>
          </BenefitItem>
          <BenefitItem>
            <BsCashCoin size={60} />
            <h3>Pay</h3>
            <p>You can easily pay online or when parcel arrived to you.</p>
          </BenefitItem>
          <BenefitItem>
            <LiaPeopleCarrySolid size={60} />
            <h3>Meet the courier</h3>
            <p>Give the parcel to the professional.</p>
          </BenefitItem>
          <BenefitItem>
            <TbTruckDelivery size={60} />
            <h3>
              Enjoy{"  "}
              <FaFlagCheckered size={20} />
            </h3>
            <p>Receive the parcel at place and time which you prefer.</p>
          </BenefitItem>
        </BenefitsList>
      </section>
    </Container>
  );
};
