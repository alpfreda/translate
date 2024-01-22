<template>
  <TranslationLanguages
    :title="$t('translation.source')"
    :is-loading="isLoading"
    :languages="languages"
    :selected="sourceLanguage || 'en'"
    :disabled-language-code="targetLanguage || 'de'"
    :is-auto-detected="!sourceLanguage"
    @change-language="onChangeLanguage"
  />
  <textarea
    v-model="inputValue"
    autofocus
    class="source-textarea"
    placeholder="Please type something to translate"
    @input="debouncedSearch"
  />
</template>

<script lang="ts" setup>
  import { PropType, computed, toRefs } from 'vue'
  import { useStore } from 'vuex'
  import {
    ACTION_LANGUAGES_CHANGE_SOURCE_LANGUAGE,
    ACTION_TRANSLATION_CHANGE_TEXT,
    GETTER_TRANSLATION_TEXT
  } from '@/store/types'
  import TranslationLanguages from '@/components/translate/TranslateLanguages.vue'
  import { Language } from '@/interfaces/language'

  const store = useStore()
  const props = defineProps({
    languages: { type: Object as PropType<Language[]>, required: true },
    isLoading: {
      type: Boolean,
      required: false
    },
    sourceLanguage: {
      type: String,
      required: true
    },
    targetLanguage: {
      type: String,
      required: true
    }
  })
  const { isLoading, languages, sourceLanguage, targetLanguage } = toRefs(props)

  const inputValue = computed({
    get: () => store.getters[GETTER_TRANSLATION_TEXT],
    set: val => {
      store.dispatch(ACTION_TRANSLATION_CHANGE_TEXT, val)
    }
  })

  const emits = defineEmits(['onTranslate'])

  let timer: number | null = null
  const debouncedSearch = () => {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      emits('onTranslate')
    }, 300)
  }

  const onChangeLanguage = (code: string) => {
    if (
      !sourceLanguage.value ||
      !targetLanguage.value ||
      targetLanguage.value !== code
    ) {
      store.dispatch(ACTION_LANGUAGES_CHANGE_SOURCE_LANGUAGE, code)
      emits('onTranslate')
    }
  }
</script>

<style scoped lang="scss">
  .source-textarea {
    width: 100%;
    height: calc(100% - 4rem);
    border: none;
    margin-top: 1rem;
    padding: 0;
    font-family: Lato;
    font-size: 1.1rem;
    &:focus {
      outline: none;
    }
  }
</style>
