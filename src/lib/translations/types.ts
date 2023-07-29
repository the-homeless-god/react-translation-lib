export type LocalesType = Record<string, string>;

export enum Messages {
  WINDOW_MOVE_TOP = "window.move.top",
  MENU_OPTION_PLAY = "menu.option.play",
  MENU_OPTION_ABOUT = "menu.option.about",
  MENU_OPTION_GUIDE = "menu.option.guide",
}

export type TranslateContextValue = {
  locale: string;
  setLocale: (language: string) => void;
};

export type Translator = (
  name: Messages,
  options?: Record<string, string | number> | undefined
) => string;
