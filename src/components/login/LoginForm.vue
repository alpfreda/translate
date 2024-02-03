<template>
  <form
    class="login-form"
    @submit.prevent="login"
  >
    <div class="form-group has-icon username">
      <input
        v-model="form.username"
        class="form-control"
        :placeholder="$t('common.username')"
        required
      >
    </div>
    <div class="form-group has-icon password">
      <input
        v-model="form.password"
        class="form-control form-password"
        :placeholder="$t('common.password')"
        required
      >
    </div>
    <Button
      type="submit"
      :is-loading="isLoading"
    >
      {{ $t('common.login') }}
    </Button>
    <div class="hint">
      <div>password: <span>password</span></div>
    </div>
  </form>
</template>
<script lang="ts" setup>
  import Button from '@/components/ui/Button.vue';
import { RequestStatus } from '@/enum/request-status';
import { Login } from '@/interfaces/login';
import { computed, ref } from 'vue';

  interface Props {
    status: RequestStatus
  }
  const form = ref<Login>({ username: 'admin', password: '' })
  const emits = defineEmits(['submitLogin'])

  const props = defineProps<Props>()
  const isLoading = computed(() => props.status === RequestStatus.Loading)

  const login = () => {
    emits('submitLogin', form.value)
  }
</script>

<style scoped>
  .login-form {
    .form-group.has-icon {
      &.username:before {
        background: url(@/assets/imgs/user.svg) no-repeat;
      }

      &.password:before {
        background: url(@/assets/imgs/password.svg) no-repeat;
      }
    }

    .btn {
      margin-top: 3rem;
    }

    .hint {
      padding: 1rem 0;
      font-size: .9rem;
    }

    .hint span {
      color: #ffeb3b
    }
  }
</style>
