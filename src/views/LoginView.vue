<template>
  <div class="login d-flex">
    <h3 class="login-title">
      {{ $t('pages.signIn') }}
    </h3>
    <LoginForm
      :status="status"
      @submit-login="onLogin"
    />
    <router-link
      class="forgot-password"
      to="/forgot-password"
    >
      {{ $t('pages.forgotPassword') }}
    </router-link>
    <Message
      v-if="error"
      type="error"
    >
      {{ error }}
    </Message>
  </div>
</template>

<script lang="ts" setup>
  import LoginForm from '@/components/login/LoginForm.vue'
import Message from '@/components/ui/Message.vue'
import { RequestStatus } from '@/enum/request-status'
import { Login } from '@/interfaces/login'
import {
ACTION_AUTH_LOGIN,
GETTER_AUTH_ERROR,
GETTER_AUTH_STATUS
} from '@/store/types'
import { computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

  const store = useStore()
  const router = useRouter()

  const status = computed(() => store.getters[GETTER_AUTH_STATUS])
  const error = computed(() => store.getters[GETTER_AUTH_ERROR])

  watch(status, () => {
    if (status.value === RequestStatus.Succeeded) {
      router.push({ name: 'home' })
    }
  })

  const onLogin = (form: Login) => {
    store.dispatch(ACTION_AUTH_LOGIN, form)
  }
</script>
<style scoped>
  .login {
    flex-direction: column;
    width: 22rem;
    padding: 1.5rem;
    margin: auto;

    .login-title {
      font-size: 4.5rem;
      text-align: center;
      margin-bottom: 1.5rem;
      font-weight: 400;
    }

    .forgot-password {
      margin-top: 0.5rem;
      display: block;
      text-align: right;
    }
  }
</style>
