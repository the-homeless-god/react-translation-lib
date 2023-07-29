import React, { createContext, useMemo, useState } from "react";
import { getLocale } from "./utils";
import { IntlProvider } from "react-intl";
import { DEFAULT_LANGUAGE, MESSAGES } from "./constants";
import { TranslateContextValue } from "./types";

export const TranslateContext = createContext<TranslateContextValue>({
  locale: DEFAULT_LANGUAGE,
  setLocale: () => { },
});

export const WithTranslate: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [locale, setLocale] = useState(() => getLocale());

  const messages = useMemo(() => MESSAGES[locale], [locale]);
  const handleSetLocale = (language: string) => {
    console.log(language, messages);
    setLocale(language);
  };

  return (
    <TranslateContext.Provider value={{ locale, setLocale: handleSetLocale }}>
      <IntlProvider
        messages={messages}
        locale={locale}
        defaultLocale={locale ?? DEFAULT_LANGUAGE}
      >
        {children}
      </IntlProvider>
    </TranslateContext.Provider>
  );
};
