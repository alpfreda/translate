import { createStore } from 'vuex'
import { auth } from './auth'
import { RootState } from '@/interfaces/root-state'
import { languages } from './languages'
import { translation } from './translation'

const store = createStore<RootState>({
  modules: {
    auth,
    languages,
    translation
  }
})

export default store
