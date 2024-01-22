import { ActionTree } from 'vuex'
import axios from 'axios'

import {
  MUTATION_TRANSLATION_LOADING,
  MUTATION_TRANSLATION_SUCCEEDED,
  MUTATION_TRANSLATION_FAILED,
  ACTION_TRANSLATION_TRANSLATE,
  ACTION_TRANSLATION_CHANGE_TEXT,
  MUTATION_TRANSLATION_CHANGE_TEXT,
  ACTION_TRANSLATION_CHANGE_RESULT,
  MUTATION_TRANSLATION_CHANGE_RESULT
} from '../types'
import { TranslationState } from '@/interfaces/translation-state'
import { RootState } from '@/interfaces/root-state'

export const actions: ActionTree<TranslationState, RootState> = {
  async [ACTION_TRANSLATION_TRANSLATE]({ commit }, query) {
    try {
      commit(MUTATION_TRANSLATION_LOADING)
      const response = await axios.post('/translate', query)
      commit(MUTATION_TRANSLATION_SUCCEEDED, response.data.translated_segments)
      return response.data
    } catch (error) {
      commit(MUTATION_TRANSLATION_FAILED, error)
    }
  },
  [ACTION_TRANSLATION_CHANGE_TEXT]({ commit }, text) {
    commit(MUTATION_TRANSLATION_CHANGE_TEXT, text)
  },
  [ACTION_TRANSLATION_CHANGE_RESULT]({ commit }, newResult) {
    commit(MUTATION_TRANSLATION_CHANGE_RESULT, newResult)
  }
}
