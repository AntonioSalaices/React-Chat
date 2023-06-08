import { BaseSyntheticEvent, Profiler, useEffect, useState } from 'react';

import Layout from './components/composed/Layout/Layout';
import Home from './screens/home/home';
import Spinner from '@Components/basics/Spinner/Spinner';

import { setTranslationsByUserPreferences } from './i18n';
import i18n from './i18n/i18n'

import { PURPLE } from '@Utils/colors';
import { Events } from '@Constans/eventConstants';
import { ThemeProvider } from 'context/ThemeContext.tsx';
import ErrorBoundary from '@Components/composed/ErrorBoundary/ErrorBoundary';

const App = (): React.ReactElement => {
  const [isLoaded, setIsLoaded] = useState<boolean>(true);


  useEffect(()=> {
    const loadTranslationsInitially = () => {
      setIsLoaded(false)
      setTranslationsByUserPreferences(i18n, navigator.language, setIsLoaded);
    }
    loadTranslationsInitially();
  },[])


  const handleLanguageChanges = (event: Partial<BaseSyntheticEvent>) => {
    setIsLoaded(false)
    const locale: string = event?.currentTarget?.clientInformation?.languages[0];
    setTranslationsByUserPreferences(i18n, locale, setIsLoaded);
  }

  useEffect(()=> {
    window.addEventListener(Events.LANGUAGE, handleLanguageChanges);

    return () => {
      window.removeEventListener(Events.LANGUAGE, handleLanguageChanges)
    }
  },[])

  function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
    // console.log('DATA', id, phase, actualDuration, baseDuration, startTime, commitTime)
  }

  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Layout>
          {isLoaded 
            ? ( <Profiler id="Navigation" onRender={onRender}>
                  <Home /> 
                </Profiler> 
            ) : (
                <Spinner singleColor={PURPLE} />
            )}
        </Layout>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
