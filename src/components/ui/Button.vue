<template>
  <button
    class="button"
    :type="type"
    :class="className"
    :disabled="disabled || isLoading"
    @click="handleClick"
  >
    <Loading v-if="isLoading" />
    <slot />
  </button>
</template>

<script lang="ts" setup>
  import { toRefs, PropType } from 'vue'
  import Loading from '@/components/ui/Loading.vue'

  const props = defineProps({
    type: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
      default: 'button'
    },
    isLoading: {
      type: Boolean,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    className: {
      type: String,
      required: false,
      default:''
    }
  })

  const { isLoading, className, disabled, type } = toRefs(props)

  const emit = defineEmits(['click'])
  const handleClick = () => {
    if (!isLoading.value) {
      emit('click')
    }
  }
</script>
<style scoped>
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #fff;
    color: #333;
    border-radius: 0.25rem;
    box-sizing: border-box;
    border: none;
    padding: 0.75rem 1rem;
    width: 100%;
    min-height: 3rem;
    text-align: center;
    text-overflow: ellipsis;
    text-transform: uppercase;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    font-weight: 500;
    overflow: hidden;
    outline: none;
    cursor: pointer;
    transition: box-shadow 0.2s;
    &:disabled {
      opacity: 0.7;
    }
  }
</style>
