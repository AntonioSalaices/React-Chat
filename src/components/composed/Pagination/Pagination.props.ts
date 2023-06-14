import { OnChangeType } from "@Utils/types";
import { DebouncedFunc } from "lodash";

export interface PaginationProps {
  pagination?: string;
  handleChange: DebouncedFunc<
    ({ target: { value } }: OnChangeType) => void
  > | void;
}
