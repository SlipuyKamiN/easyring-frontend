import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { flags } from "~/data/flagIcons";
import { LanguagePicker } from "../Header/Header.styled";

export const LangToggler = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("de");
  const nextLang =
    lang === "de" ? "en" : lang === "en" ? "ua" : lang === "ua" && "de";

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  console.log(t("welcome"));

  return (
    <LanguagePicker onClick={() => setLang(nextLang)}>
      {flags[lang]}
    </LanguagePicker>
  );
};
