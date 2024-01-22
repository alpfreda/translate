<template>
  <main class="login-wrapper d-flex align-center justify-center">
    <slot />
  </main>
</template>
<style scoped>
.login-wrapper {
    background: url(@/assets/imgs/login-bg.svg) #178CED no-repeat center / cover;
    color: #fff;
    height: 100vh;
}
</style>