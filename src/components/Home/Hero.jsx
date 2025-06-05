import {
  HeroBtnsList,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
  TrackInput,
  TrackInputWrapper,
} from "./Hero.styled";
import {
  HeroMainBtn,
  HeroSecondaryBtn,
  PrimaryBtn,
} from "../Common/Button.styled";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { RiArrowDownWideFill } from "react-icons/ri";
import { Container } from "../SharedLayout/SharedLayout.styled";
import { IconLink } from "../Footer/Footer.styled";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ValidationErrorText } from "../SharedLayout/ValidationErrorText";
import { yupResolver } from "@hookform/resolvers/yup";
import { trackingIDSchema } from "~/schemas/trackingIDSchema";
import { handleInputTextCase } from "~/helpers/handleInputTextCase";

export const Hero = () => {
  const [inputVisible, setInputVisible] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      trackingID: "",
    },
    resolver: yupResolver(trackingIDSchema),
  });

  const onSubmit = ({ trackingID }) => {
    navigate(`/tracking/${trackingID}`);
  };

  const showInput = () => {
    setInputVisible(!inputVisible);
  };

  return (
    <HeroSection>
      <Container>
        <HeroTitle>
          S<span>a</span>m<span>e</span> d<span>a</span>y d<span>e</span>liv
          <span>e</span>ry
        </HeroTitle>
        <HeroSubtitle>in Berlin</HeroSubtitle>
        <HeroBtnsList>
          <li>
            <HeroMainBtn to={"createorder/maininfo"}>
              Create pick-up
            </HeroMainBtn>
          </li>
          {!inputVisible && (
            <li>
              <HeroSecondaryBtn onClick={showInput}>
                Track parcel
              </HeroSecondaryBtn>
            </li>
          )}
          {inputVisible && (
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              <TrackInputWrapper>
                <TrackInput
                  {...register("trackingID")}
                  type="text"
                  id="trackingID"
                  minLength={10}
                  maxLength={10}
                  placeholder="Parcel ID"
                  onInput={(e) => handleInputTextCase(e.target, setValue)}
                  autoFocus
                />
                <PrimaryBtn type="submit">
                  <FaSearch size={20} />
                </PrimaryBtn>
              </TrackInputWrapper>
              {errors.trackingID && (
                <ValidationErrorText inputError={errors.trackingID} />
              )}
            </form>
          )}
        </HeroBtnsList>
        <IconLink>
          <RiArrowDownWideFill size={50} />
        </IconLink>
      </Container>
    </HeroSection>
  );
};
