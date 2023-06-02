import { ChangeEvent } from "react";

export interface PaginationProps {
    pagination: string;
    handleChange:  (event: ChangeEvent<HTMLInputElement>) => void | string;
}