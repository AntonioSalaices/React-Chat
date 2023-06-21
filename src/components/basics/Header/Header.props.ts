import { Theme } from "@Constans/Theme";

export interface HeaderProps {
  theme: Theme;
  onChange: (args: Theme) => void;
  icon: JSX.Element;
}
