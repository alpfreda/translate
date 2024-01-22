<template>
  <header>
    <nav class="navbar">
      <ul class="navbar-inner">
        <li>
          <Logo />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup>
  import Logo from './Logo.vue'
</script>
<style scoped>
  .navbar {
    padding: 1rem 2rem;
    .navbar-inner {
      list-style: none;
      padding: 0;
    }
  }
</style>
