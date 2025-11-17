import { useEffect, useState } from "react";
import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import { SectionTitle } from "./Steps.styled";
import { useTranslation } from "react-i18next";
import { BiLinkAlt } from "react-icons/bi";

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
        <SectionTitle>
          <a
            href="https://www.google.com/search?sca_esv=9be0e29e8e63d6e0&sxsrf=AE3TifPXuB4Y24WWEJ9DMsFdEXxUxbDABw:1763397498681&q=easyring+lieferdienst+reviews&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E3M4XB27MDW1VvetdUEyfKYt2yKSEierb_MsQNn6KrPywBGtsH6D8qj7iCIT8N5meW1uGUc%3D&uds=AOm0WdFMVirIzWORczeoQ-OxvYKxFMg4prvF1teEsTJwMJ-vnK-SDI5HLRX_a3EVwY0gd32O2APDCfgVpHogUuPVffx-horzUytrEP92pSs_si9JcpG5rW-IVqd0fllM4kZzZriEibK8&sa=X&ved=2ahUKEwiNzIbMz_mQAxWrRPEDHcWlE4kQ3PALegQIKRAF&biw=1536&bih=730&dpr=1.25"
            rel={"noopener noreferrer nofollow"}
            target="_blank"
          >
            {t("reviews")}
            <BiLinkAlt size={20} />
          </a>
        </SectionTitle>

        <div
          // className="elfsight-app-4b8e65b5-496e-4c5f-a2be-5d66e548616e elfsight-wrapper"
          className="elfsight-app-86b66e53-2179-4d1a-b0e4-e075184e7636 elfsight-wrapper"
          // className="elfsight-app-447c41b7-0ac4-47aa-843a-130feaca7395 elfsight-wrapper"

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
