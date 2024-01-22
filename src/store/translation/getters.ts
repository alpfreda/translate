import { TranslationState } from '@/interfaces/translation-state'
import {
  GETTER_TRANSLATION_ERROR,
  GETTER_TRANSLATION_NUMBER_OF_WORDS,
  GETTER_TRANSLATION_RESULT,
  GETTER_TRANSLATION_STATUS,
  GETTER_TRANSLATION_TEXT
} from '../types'

export const getters = {
  [GETTER_TRANSLATION_RESULT]: (state: TranslationState) => state.result,
  [GETTER_TRANSLATION_STATUS]: (state: TranslationState) => state.status,
  [GETTER_TRANSLATION_ERROR]: (state: TranslationState) => state.error,
  [GETTER_TRANSLATION_TEXT]: (state: TranslationState) => state.text,
  [GETTER_TRANSLATION_NUMBER_OF_WORDS]: (state: TranslationState) =>
    state.result
      .reduce((all: string, next: string) => all.concat(next), '')
      .split(' ')
      .filter(item => item.length > 0).length
}
