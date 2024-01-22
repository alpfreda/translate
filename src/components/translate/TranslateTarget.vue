<template>
  <TranslationLanguages
    :title="$t('translation.target')"
    :is-loading="isLoading"
    :languages="languages"
    :selected="targetLanguage || 'de'"
    :disabled-language-code="sourceLanguage || 'en'"
    :is-auto-detected="!targetLanguage"
    @change-language="onChangeLanguage"
  />
  <textarea
    v-model="inputValue"
    autofocus
    class="target-textarea"
  />
</template>

<script lang="ts" setup>
  import { PropType, computed, toRefs } from 'vue'
  import { useStore } from 'vuex'
  import {
    ACTION_LANGUAGES_CHANGE_TARGET_LANGUAGE,
    ACTION_TRANSLATION_CHANGE_RESULT,
    GETTER_TRANSLATION_RESULT
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
    get: () => store.getters[GETTER_TRANSLATION_RESULT],
    set: val => {
      store.dispatch(ACTION_TRANSLATION_CHANGE_RESULT, val)
    }
  })

  const emits = defineEmits(['onTranslate'])

  const onChangeLanguage = (code: string) => {
    if (
      !sourceLanguage.value ||
      !targetLanguage.value ||
      sourceLanguage.value !== code
    ) {
      store.dispatch(ACTION_LANGUAGES_CHANGE_TARGET_LANGUAGE, code)
      emits('onTranslate')
    }
  }
</script>

<style scoped lang="scss">
  .target-textarea {
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
