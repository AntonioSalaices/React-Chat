import React from 'react';
import { I18n } from 'i18n-js';
import { setTranslationsByUserPreferences } from './i18n';
import { LanguageCode } from '@Constans/languageConstans';
import * as i18Instance from './i18n';

describe('I18n :: Spec', () => {
  const i18n = new I18n();
  test('should execute setTranslationsByUserPreferences and load english translations', () => {
    const setIsLoaded: React.Dispatch<React.SetStateAction<boolean>> = jest.fn();
    const spySetTranslationsByUserPreferences = jest.spyOn(i18Instance, 'setTranslationsByUserPreferences');

    setTranslationsByUserPreferences(i18n, LanguageCode.EN, setIsLoaded);

    expect(spySetTranslationsByUserPreferences).toHaveBeenCalled();
  });
});
