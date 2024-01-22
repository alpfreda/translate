<template>
  <TheHeader />
  <main class="main">
    <slot />
  </main>
  <footer />
</template>
<script lang="ts" setup>
  import TheHeader from '@/components/ui/Header.vue'
</script>
<style scoped>
  .main {
    max-width: 78rem;
    padding: 0 2rem;
    margin: auto;
  }
</style>
