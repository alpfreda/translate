<template>
  <component
    :is="layout"
    v-if="layout"
  >
    <router-view />
  </component>
</template>

<script lang="ts">
  import DefaultLayout from '@/components/layouts/DefaultLayout.vue'
  import LoginLayout from '@/components/layouts/LoginLayout.vue'
  import { computed } from 'vue'

  export default {
    components: {
      DefaultLayout,
      LoginLayout
    }
  }
</script>
<script lang="ts" setup>
  import { useRoute } from 'vue-router'
  const route = useRoute()
  const layout = computed(() => {
    return route.meta.layout
  })
</script>
