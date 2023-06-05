import { Theme } from "@Constans/Theme";

export interface HeaderProps {
    theme: Theme, 
    onChange: React.Dispatch<React.SetStateAction<Theme>>
}