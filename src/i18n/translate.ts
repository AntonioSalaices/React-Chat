import I18n from "i18n-js";
import { TxKeyPath } from "./i18n";
import i18n from "./i18n";
import { DeepPartial } from "@Utils/types";
/**
 * Translates text
 * 
 * @param key The i18n key.
 */

export function translate(key: DeepPartial<TxKeyPath>, options?: I18n.TranslateOptions){
    return key ? i18n.t(key, options) : null;
}