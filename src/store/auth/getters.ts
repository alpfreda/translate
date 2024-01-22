import { AuthState } from '@/interfaces/auth-state'
import {
  GETTER_AUTH_ERROR,
  GETTER_AUTH_IS_AUTHENTICATED,
  GETTER_AUTH_STATUS
} from '../types'

export const getters = {
  [GETTER_AUTH_IS_AUTHENTICATED]: (state: AuthState) => !!state.token,
  [GETTER_AUTH_STATUS]: (state: AuthState) => state.status,
  [GETTER_AUTH_ERROR]: (state: AuthState) => state.error
}
