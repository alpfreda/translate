import { LanguageState } from '@/interfaces/language-state'
import { MutationTree } from 'vuex'
import {
  MUTATION_LANGUAGES_LOADING,
  MUTATION_LANGUAGES_SUCCEEDED,
  MUTATION_LANGUAGES_FAILED,
  MUTATION_LANGUAGES_CHANGE_SOURCE_LANGUAGE,
  MUTATION_LANGUAGES_CHANGE_TARGET_LANGUAGE
} from '../types'
import { RequestStatus } from '@/enum/request-status'

export const mutations: MutationTree<LanguageState> = {
  [MUTATION_LANGUAGES_LOADING](state) {
    state.status = RequestStatus.Loading
    state.error = null
  },
  [MUTATION_LANGUAGES_SUCCEEDED](state, list) {
    state.status = RequestStatus.Succeeded
    state.list = list
    state.error = null
  },
  [MUTATION_LANGUAGES_FAILED](state, error) {
    state.status = RequestStatus.Failed
    state.error = error
  },
  [MUTATION_LANGUAGES_CHANGE_SOURCE_LANGUAGE](state, code) {
    state.sourceLanguage = code
  },
  [MUTATION_LANGUAGES_CHANGE_TARGET_LANGUAGE](state, code) {
    state.targetLanguage = code
  }
}
