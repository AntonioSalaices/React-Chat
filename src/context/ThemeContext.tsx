import { Theme } from '@Constans/Theme';
import React, { createContext, useEffect, useState } from 'react';
import { ThemeProviderProps } from './ThemeProvider.props';

export const ThemeContext = createContext<any>({
  theme: Theme.Light,
  undefined,
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // We can use local storage to save theme choice
  const [theme, setTheme] = useState<string>(Theme.Light);

  useEffect(() => {
    const getThemeUserPreferences = () => {
      const theme = localStorage.getItem(Theme.Theme);
      theme && setTheme(theme);
    };
    getThemeUserPreferences();
  }, []);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
