export interface InputFieldProps {
    value?: string | number,
    symbol?: string | JSX.Element,
    name?: string,
    placeholder?: string, 
    type: | 'text' | 'number' | 'date',
    ref?: React.RefObject<HTMLInputElement>, 
    onChange?: void;
}