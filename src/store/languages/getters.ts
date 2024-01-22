import { LanguageState } from '@/interfaces/language-state'
import {
  GETTER_LANGUAGES_ERROR,
  GETTER_LANGUAGES_LIST,
  GETTER_LANGUAGES_SOURCE_LANGUAGE,
  GETTER_LANGUAGES_STATUS,
  GETTER_LANGUAGES_TARGET_LANGUAGE
} from '../types'

export const getters = {
  [GETTER_LANGUAGES_LIST]: (state: LanguageState) => state.list,
  [GETTER_LANGUAGES_STATUS]: (state: LanguageState) => state.status,
  [GETTER_LANGUAGES_ERROR]: (state: LanguageState) => state.error,
  [GETTER_LANGUAGES_SOURCE_LANGUAGE]: (state: LanguageState) =>
    state.sourceLanguage,
  [GETTER_LANGUAGES_TARGET_LANGUAGE]: (state: LanguageState) =>
    state.targetLanguage
}