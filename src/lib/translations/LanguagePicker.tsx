import React, { useContext } from "react";
import { LOCALES } from "./constants";
import { TranslateContext } from "./withTranslate";

export const LanguagePicker: React.FC = () => {
  const { locale, setLocale } = useContext(TranslateContext);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    setLocale(selectedLanguage);
  };

  return (
    <select onChange={handleChange} defaultValue={locale}>
      {Object.values(LOCALES).map((language) => (
        <option key={language} value={language}>
          {language}
        </option>
      ))}
    </select>
  );
};
