import { ActionTree } from 'vuex'
import axios from 'axios'

import {
  ACTION_AUTH_LOGIN,
  ACTION_AUTH_RESTORE_TOKEN,
  MUTATION_AUTH_LOADING,
  MUTATION_AUTH_SUCCEEDED,
  MUTATION_AUTH_FAILED,
  MUTATION_AUTH_RESTORE_TOKEN,
} from '../types'
import { AuthState } from '@/interfaces/auth-state'
import { RootState } from '@/interfaces/root-state'

export const actions: ActionTree<AuthState, RootState> = {
  async [ACTION_AUTH_LOGIN]({ commit }, credentials) {
    try {
      commit(MUTATION_AUTH_LOADING)
      const response = await axios.post('/login', credentials)
      commit(MUTATION_AUTH_SUCCEEDED, response.data.access_token)
      return response.data
    } catch (error) {
      commit(MUTATION_AUTH_FAILED, error)
    }
  },
  [ACTION_AUTH_RESTORE_TOKEN]({ commit }, token) {
    commit(MUTATION_AUTH_RESTORE_TOKEN, token)
  }
}
