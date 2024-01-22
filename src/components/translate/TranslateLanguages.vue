<template>
  <div class="language-selection">
    <span class="title">{{ title }}</span>
    <Loading v-if="isLoading" />
    <Button
      v-for="language in languages"
      :key="language.code"
      type="button"
      :class-name="languageClass(language.code)"
      :disabled="disabledLanguageCode === language.code"
      @click="handleClick(language.code)"
    >
      <span
        v-if="isAutoDetected && isLanguageActive(language.code)"
        class="auto-detected"
      >
        {{ $t('translation.autoDetected') }}
      </span>
      {{ language.name }}
    </Button>
  </div>
</template>

<script lang="ts" setup>
  import { toRefs, PropType } from 'vue'
  import { Language } from '@/interfaces/language'
  import Loading from '@/components/ui/Loading.vue'
  import Button from '@/components/ui/Button.vue'

  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    selected: {
      type: String,
      required: true
    },
    disabledLanguageCode: {
      type: String,
      required: true
    },
    languages: {
      type: Array as PropType<Language[]>,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: false
    },
    isAutoDetected: {
      type: Boolean,
      required: false
    }
  })

  const {
    title,
    selected,
    languages,
    isLoading,
    isAutoDetected,
    disabledLanguageCode
  } = toRefs(props)

  const emit = defineEmits(['changeLanguage'])

  const isLanguageActive = (code: string) => selected?.value === code
  const languageClass = (code: string) =>
    `language-item ${isLanguageActive(code) ? 'active' : ''}`

  const handleClick = (code: string) => {
    if (!isLanguageActive(code)) {
      emit('changeLanguage', code)
    }
  }
</script>

<style scoped lang="scss">
  .language-selection {
    position: sticky;
    top: 0;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    color: #9b9b9b;
    background: #fff;
    font-size: 0.9rem;
    font-weight: 600;
    @media screen and (max-width: 600px) {
      position: relative;
      margin-bottom: 0;
    }
    .title {
      margin-right: 2rem;
      padding: 0.5rem 0;
      @media screen and (max-width: 600px) {
        flex: 0 0 100%;
      }
    }
    .auto-detected {
      margin-right: 0.25rem;
    }
    .language-item {
      position: relative;
      margin-right: 2.5rem;
      cursor: pointer;
      text-transform: uppercase;
      border-bottom: 2px solid transparent;
      transition: 300ms ease-in-out all;
      width: auto;
      box-shadow: none;
      border-radius: 0;
      padding: 0.5rem 0;
      min-height: auto;
      &:hover:not(:disabled) {
        border-bottom-color: #007fe8;
      }
      &.active {
        color: #007fe8;
        padding-right: 1.5rem;
        &:after {
          position: absolute;
          content: '';
          background: url(@/assets/imgs/active.svg) no-repeat center;
          height: 1rem;
          width: 1rem;
          right: 0;
        }
      }
    }
  }
</style>
