<template>
  <div :class="['message', type]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
  import { toRefs } from 'vue'

  const props = defineProps({
    type: {
      type: String,
      required: true
    }
  })

  const { type } = toRefs(props)
</script>

<style scoped>
  .message {
    padding: 0.5rem 1rem;
    margin: 1rem 0;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;

    &.success {
      background-color: #4caf50;
    }

    &.error {
      background-color: #f44336;
    }
  }
</style>
