import { Module } from 'vuex'
import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'
import { AuthState } from '@/interfaces/auth-state'
import { RootState } from '@/interfaces/root-state'
import { RequestStatus } from '@/enum/request-status'

const state: AuthState = {
  token: null,
  status: RequestStatus.Idle,
  error: null
}

export const auth: Module<AuthState, RootState> = {
  state,
  getters,
  actions,
  mutations
}
