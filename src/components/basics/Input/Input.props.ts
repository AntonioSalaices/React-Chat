import { OnChangeType } from "@Utils/types";

export interface InputProps {
  value?: string | number;
  icon?: string | JSX.Element;
  name?: string;
  placeholder?: string;
  type: "text" | "number" | "date";
  ref?: React.RefObject<HTMLInputElement>;
  onChange?: (aux: OnChangeType) => void;
  subText?: string;
}
