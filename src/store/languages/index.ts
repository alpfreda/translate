import { Module } from 'vuex'
import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'
import { LanguageState } from '@/interfaces/language-state'
import { RootState } from '@/interfaces/root-state'
import { RequestStatus } from '@/enum/request-status'

const state: LanguageState = {
  list: [],
  status: RequestStatus.Idle,
  error: null,
  sourceLanguage: '',
  targetLanguage: ''
}

export const languages: Module<LanguageState, RootState> = {
  state,
  getters,
  actions,
  mutations
}
