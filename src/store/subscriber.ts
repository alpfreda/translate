import store from '.'
import { MUTATION_AUTH_RESTORE_TOKEN, MUTATION_AUTH_SUCCEEDED } from './types'
import { MutationPayload } from 'vuex'
import { setAuthorizationHeader } from '@/utils/translate-axios'

store.subscribe((mutation: MutationPayload) => {
  if (mutation.type === MUTATION_AUTH_SUCCEEDED) {
    setAuthorizationHeader(mutation.payload)
    localStorage.setItem('token', mutation.payload)
  } else if (mutation.type === MUTATION_AUTH_RESTORE_TOKEN) {
    setAuthorizationHeader(mutation.payload)
  }
})