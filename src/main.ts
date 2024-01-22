import { createApp } from 'vue'
import { ACTION_AUTH_RESTORE_TOKEN } from '@/store/types'
import { setBaseUrl } from '@/utils/translate-axios'
import '@/assets/main.scss'
import '@/store/subscriber'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

setBaseUrl()

store.dispatch(ACTION_AUTH_RESTORE_TOKEN, localStorage.getItem('token'))

createApp(App).use(i18n).use(store).use(router).mount('#app')
