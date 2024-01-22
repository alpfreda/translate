import { Module } from 'vuex'
import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'
import { TranslationState } from '@/interfaces/translation-state'
import { RootState } from '@/interfaces/root-state'
import { RequestStatus } from '@/enum/request-status'

const state: TranslationState = {
  text: '',
  result: [],
  status: RequestStatus.Idle,
  error: null
}

export const translation: Module<TranslationState, RootState> = {
  state,
  getters,
  actions,
  mutations
}
