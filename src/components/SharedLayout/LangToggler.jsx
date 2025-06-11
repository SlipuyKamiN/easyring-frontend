import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { flags } from "~/data/flagIcons";
import { LanguagePicker } from "../Header/Header.styled";

export const LangToggler = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const nextLang =
    lang === "de" ? "en" : lang === "en" ? "ua" : lang === "ua" && "de";

  useEffect(() => {
    if (lang) i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <LanguagePicker onClick={() => setLang(nextLang)}>
      {flags[lang]}
    </LanguagePicker>
  );
};
