import React, { BaseSyntheticEvent, useEffect, useState } from 'react';

import { renderContent } from '@Hocs/withLoadingLogic/withLoadingLogic';
import { ErrorBoundary, Spinner } from '@Components/Core';
import AppRoutes from 'AppRoutes';

import { ThemeProvider } from 'context/ThemeContext.tsx';
import { Events } from '@Constans/eventConstants';
import { PURPLE } from '@Utils/colors';
import { setTranslationsByUserPreferences } from './i18n';
import i18n from './i18n/i18n';
import { auth } from './auth/AuthProvider';

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
    window.addEventListener(Events.LANGUAGE, handleLanguageChanges);

    return () => {
      window.removeEventListener(Events.LANGUAGE, handleLanguageChanges);
    };
  }, []);

  return (
    <ThemeProvider>
      <ErrorBoundary>{isLoaded ? <AppRoutes /> : renderContent(<Spinner singleColor={PURPLE} />)}</ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
