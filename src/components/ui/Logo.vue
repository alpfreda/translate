<template>
  <div class="logo-wrapper">
    <img :src="logo">
    <span
      class="logo-name"
      alt="Translate"
    >Translate</span>
  </div>
</template>
<script lang="ts" setup>
  import logo from '@/assets/imgs/logo.svg'
</script>
<style scoped>
  .logo-wrapper {
    display: flex;
    .logo-name {
      margin-left: 1rem;
      font-size: 0.9rem;
    }
  }
</style>
