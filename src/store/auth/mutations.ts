import { AuthState } from '@/interfaces/auth-state'
import { MutationTree } from 'vuex'
import {
  MUTATION_AUTH_LOADING,
  MUTATION_AUTH_SUCCEEDED,
  MUTATION_AUTH_FAILED,
  MUTATION_AUTH_RESTORE_TOKEN
} from '../types'
import { RequestStatus } from '@/enum/request-status'

export const mutations: MutationTree<AuthState> = {
  [MUTATION_AUTH_LOADING](state) {
    state.status = RequestStatus.Loading
    state.error = null
  },
  [MUTATION_AUTH_SUCCEEDED](state, token) {
    state.status = RequestStatus.Succeeded
    state.token = token
    state.error = null
  },
  [MUTATION_AUTH_FAILED](state, error) {
    state.status = RequestStatus.Failed
    state.error = error
  },
  [MUTATION_AUTH_RESTORE_TOKEN](state, token) {
    state.token = token
  }
}
