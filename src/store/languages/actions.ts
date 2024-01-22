import { ActionTree } from 'vuex'
import axios from 'axios'

import {
  ACTION_LANGUAGES_GET,
  MUTATION_LANGUAGES_LOADING,
  MUTATION_LANGUAGES_SUCCEEDED,
  MUTATION_LANGUAGES_FAILED,
  ACTION_LANGUAGES_CHANGE_SOURCE_LANGUAGE,
  MUTATION_LANGUAGES_CHANGE_SOURCE_LANGUAGE,
  ACTION_LANGUAGES_CHANGE_TARGET_LANGUAGE,
  MUTATION_LANGUAGES_CHANGE_TARGET_LANGUAGE
} from '../types'
import { LanguageState } from '@/interfaces/language-state'
import { RootState } from '@/interfaces/root-state'

export const actions: ActionTree<LanguageState, RootState> = {
  async [ACTION_LANGUAGES_GET]({ commit }) {
    try {
      commit(MUTATION_LANGUAGES_LOADING)
      const response = await axios.get('/languages')
      commit(MUTATION_LANGUAGES_SUCCEEDED, response.data.languages)
      return response.data
    } catch (error) {
      commit(MUTATION_LANGUAGES_FAILED, error)
    }
  },
  [ACTION_LANGUAGES_CHANGE_SOURCE_LANGUAGE]({ commit }, code) {
    commit(MUTATION_LANGUAGES_CHANGE_SOURCE_LANGUAGE, code)
  },
  [ACTION_LANGUAGES_CHANGE_TARGET_LANGUAGE]({ commit }, code) {
    commit(MUTATION_LANGUAGES_CHANGE_TARGET_LANGUAGE, code)
  }
}
