import { StepItem, StepsList, SectionTitle } from "./Steps.styled";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { BsCashCoin } from "react-icons/bs";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { TbTruckDelivery } from "react-icons/tb";
import { FaFlagCheckered } from "react-icons/fa";
import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import { Trans, useTranslation } from "react-i18next";

export const Steps = () => {
  const { t } = useTranslation();

  return (
    <Section id="how-it-works">
      <Container>
        <SectionTitle>{t("how-it-works")}</SectionTitle>
        <StepsList>
          <StepItem>
            <HiOutlineClipboardDocumentList size={60} />
            <h3>{t("steps.0.title")}</h3>
            <p>
              <Trans i18nKey="steps.0.desc" components={{ b: <b /> }} />
            </p>
          </StepItem>
          <StepItem>
            <BsCashCoin size={60} />
            <h3>{t("steps.1.title")}</h3>
            <p>
              <Trans i18nKey="steps.1.desc" components={{ b: <b /> }} />
            </p>
          </StepItem>
          <StepItem>
            <LiaPeopleCarrySolid size={60} />
            <h3>{t("steps.2.title")}</h3>
            <p>
              <Trans i18nKey="steps.2.desc" components={{ b: <b /> }} />
            </p>
          </StepItem>
          <StepItem>
            <TbTruckDelivery size={60} />
            <h3>
              {t("steps.3.title")} <FaFlagCheckered size={20} />
            </h3>
            <p>
              <Trans i18nKey="steps.3.desc" components={{ b: <b /> }} />
            </p>
          </StepItem>
        </StepsList>
      </Container>
    </Section>
  );
};
