import { LOCALES } from "./constants";

export const getLocale = (): string => {
  const language: string[] = Object.values(LOCALES);
  const userLanguage: string = navigator.language;
  const defaultLanguage: string = LOCALES.RUSSIAN;

  if (language.includes(userLanguage)) {
    return userLanguage;
  }

  return defaultLanguage;
};
