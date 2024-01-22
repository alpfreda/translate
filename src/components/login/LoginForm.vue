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
  </form>
</template>
<script lang="ts" setup>
  import { Login } from '@/interfaces/login'
  import Button from '@/components/ui/Button.vue'
  import { ref, computed } from 'vue'
  import { RequestStatus } from '@/enum/request-status'

  interface Props {
    status: RequestStatus
  }
  const form = ref<Login>({ username: '', password: '' })
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
  }
</style>
