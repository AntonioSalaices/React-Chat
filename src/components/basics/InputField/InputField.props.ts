import { ChangeEvent } from 'react';

export interface InputFieldProps {
    value?: string | number,
    label?: string,
    name?: string,
    placeholder?: string, 
    type: | 'text' | 'number' | 'date',
    ref?: React.RefObject<HTMLInputElement>, 
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void | string;
}