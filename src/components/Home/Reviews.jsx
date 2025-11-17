import { useEffect, useState } from "react";
import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import { SectionTitle } from "./Steps.styled";
import { useTranslation } from "react-i18next";

export const Reviews = () => {
  const { t } = useTranslation();
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.onload = () => setIsScriptLoaded(true);
    document.body.appendChild(script);
  }, []);

  if (!isScriptLoaded) return null;

  return (
    <Section>
      <Container>
        <SectionTitle>{t("reviews")}</SectionTitle>

        <div
          // className="elfsight-app-4b8e65b5-496e-4c5f-a2be-5d66e548616e elfsight-wrapper"
          className="elfsight-app-447c41b7-0ac4-47aa-843a-130feaca7395 elfsight-wrapper"
          data-elfsight-app-lazy
        ></div>
      </Container>
    </Section>
  );
};

//elfsight
//vqa00856@jioso.com
//82676437Mixa
//ChIJxxliwC2qMUYRMjg5VQm_hlY
