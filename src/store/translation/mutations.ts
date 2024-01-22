import { TranslationState } from '@/interfaces/translation-state'
import { MutationTree } from 'vuex'
import {
  MUTATION_TRANSLATION_LOADING,
  MUTATION_TRANSLATION_SUCCEEDED,
  MUTATION_TRANSLATION_FAILED,
  MUTATION_TRANSLATION_CHANGE_TEXT,
  MUTATION_TRANSLATION_CHANGE_RESULT
} from '../types'
import { RequestStatus } from '@/enum/request-status'

export const mutations: MutationTree<TranslationState> = {
  [MUTATION_TRANSLATION_LOADING](state) {
    state.status = RequestStatus.Loading
    state.error = null
  },
  [MUTATION_TRANSLATION_SUCCEEDED](state, result) {
    state.status = RequestStatus.Succeeded
    state.result = result
    state.error = null
  },
  [MUTATION_TRANSLATION_FAILED](state, error) {
    state.status = RequestStatus.Failed
    state.error = error
  },
  [MUTATION_TRANSLATION_CHANGE_TEXT](state, text) {
    state.text = text
  },
  [MUTATION_TRANSLATION_CHANGE_RESULT](state, newResult) {
    // This part is a bad code but I did only because of the total words :(
    if (state.result) {
      state.result[0] = newResult
    }
  }
}
