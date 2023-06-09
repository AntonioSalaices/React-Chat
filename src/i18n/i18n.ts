import { I18n } from "i18n-js";
import en from "./translations/en.json";

const i18n = new I18n();
const localLanguage = navigator.language || "en";
i18n.locale = localLanguage;
i18n.enableFallback = true;

export const setTranslationsByUserPreferences = async (
  i18nInstance: I18n,
  locale: string,
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const response = await import(`./translations/${locale}.json`);
    const translations = await response.default;
    setIsLoaded(true);

    i18nInstance.store(translations);
    i18n.locale = locale;
  } catch (error) {
    //TODO Handle error
  }
};

export default i18n;

/**
 * Builds up valid keypaths for translations
 * Update to your default locale of choice if not english
 */

type DefaultLocale = typeof en;

export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;

type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`;
}[keyof TObj & string];
