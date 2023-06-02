import { ChangeEvent } from "react";

export interface SearchProps {
    search: string;
    handleChange:  (event: ChangeEvent<HTMLInputElement>) => void | string;
}