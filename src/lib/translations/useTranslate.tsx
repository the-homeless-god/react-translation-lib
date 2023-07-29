import { IntlShape, useIntl } from "react-intl";
import { Messages } from "./types";

export const useTranslate = (): ((
  name: Messages,
  options?: Record<string, string | number>
) => string) => {
  const intl: IntlShape = useIntl();

  return (name: Messages, options?: Record<string, string | number>): string =>
    intl.formatMessage({ id: name }, options);
};
