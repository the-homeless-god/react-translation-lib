import React from "react";

import { useTranslate } from "$lib/translations/useTranslate";
import { Messages } from "$lib/translations/types";

export const App: React.FC = () => {
  const translate = useTranslate();

  return (
    <>{translate(Messages.WINDOW_MOVE_TOP)}</>
  )
}
