<template>
  <div class="forgot-password d-flex">
    <h3 class="forgot-password-title">
      {{ $t('pages.forgotPassword') }}
    </h3>
    <router-link
      class="login"
      to="/login"
    >
      {{ $t('pages.signIn') }}
    </router-link>
  </div>
</template>

<style scoped>
  .forgot-password {
    flex-direction: column;
    width: 22rem;
    padding: 1.5rem;
    margin: auto;

    .forgot-password-title {
      font-size: 2.25rem;
      text-align: center;
      margin-bottom: 1.5rem;
      font-weight: 400;
    }

    .login {
      margin-top: 0.5rem;
      display: block;
      text-align: right;
    }
  }
</style>
