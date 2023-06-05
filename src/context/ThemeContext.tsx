import { Theme } from '@Constans/Theme';
import React, { createContext, useState } from 'react';
import { ThemeProviderProps } from './ThemeProvider.props';

export const ThemeContext = createContext<any>({theme: Theme.LIGHT, undefined});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    // We can use local storage to save theme choice
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
                {children}
        </ThemeContext.Provider>
    );
}