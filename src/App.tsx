import React, { BaseSyntheticEvent, useEffect, useState } from 'react';

import { ErrorBoundary } from '@Components/Core';
import AppRoutes from 'AppRoutes';

import { ThemeProvider } from 'context/ThemeContext.tsx';
import { Events } from '@Constans/eventConstants';
import { setTranslationsByUserPreferences } from './i18n';
import i18n from './i18n/i18n';
import { AuthProvider } from 'auth/AuthContext';

const App = (): React.ReactElement => {
  const [isLoaded, setIsLoaded] = useState<boolean>(true);

  useEffect(() => {
    const loadTranslationsInitially = () => {
      setIsLoaded(false);
      setTranslationsByUserPreferences(i18n, navigator.language, setIsLoaded);
    };
    loadTranslationsInitially();
  }, []);

  const handleLanguageChanges = (event: Partial<BaseSyntheticEvent>) => {
    setIsLoaded(false);
    const locale: string = event?.currentTarget?.clientInformation?.languages[0];
    setTranslationsByUserPreferences(i18n, locale, setIsLoaded);
  };

  useEffect(() => {
    window.addEventListener(Events.Language, handleLanguageChanges);

    return () => {
      window.removeEventListener(Events.Language, handleLanguageChanges);
    };
  }, []);

  return (
    <AuthProvider>
      <ThemeProvider>
        <ErrorBoundary>
          <>{isLoaded && <AppRoutes />}</>
        </ErrorBoundary>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
