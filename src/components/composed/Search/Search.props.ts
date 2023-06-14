import { OnChangeType } from "@Utils/types";
import { DebouncedFunc } from "lodash";
export interface SearchProps {
  search?: string;
  handleChange: DebouncedFunc<
    ({ target: { value } }: OnChangeType) => void
  > | void;
}
