import EnglishLocale from "./locales/en.json";
import RussianLocale from "./locales/ru.json";

import { LocalesType } from "./types";

export const LOCALES: LocalesType = {
  ENGLISH: "en-US",
  RUSSIAN: "ru-RU",
};

export const DEFAULT_LANGUAGE = LOCALES.RUSSIAN;

export const MESSAGES: {
  [key: string]: Record<string, string>;
} = {
  [LOCALES.RUSSIAN]: RussianLocale,
  [LOCALES.ENGLISH]: EnglishLocale,
};
