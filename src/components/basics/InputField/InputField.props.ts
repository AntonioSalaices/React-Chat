import { OnChangeType } from "@Utils/types";
import { DebouncedFunc } from "lodash";

export interface InputFieldProps {
  value?: string | number;
  symbol?: string | JSX.Element;
  name?: string;
  placeholder?: string;
  type: "text" | "number" | "date";
  ref?: React.RefObject<HTMLInputElement>;
  onChange?: (
    aux: string
  ) => void | DebouncedFunc<({ target: { value } }: OnChangeType) => void>;
}
