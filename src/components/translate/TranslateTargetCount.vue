<template>
  <span class="number-of-words">{{ $t('translation.numberOfWords') }} {{ numberOfWords }}</span>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { GETTER_TRANSLATION_NUMBER_OF_WORDS } from '@/store/types'

  const store = useStore()

  const numberOfWords = computed(
    () => store.getters[GETTER_TRANSLATION_NUMBER_OF_WORDS]
  )
</script>
<style scoped>
  .number-of-words {
    margin-top: 1.5rem;
    color: #9b9b9b;
  }
</style>
