<template>
  <div>
    <Divider>
      <template #top-pane>
        <TranslateSource
          :is-loading="isLoading"
          :languages="languages"
          :source-language="sourceLanguage"
          :target-language="targetLanguage"
          @on-translate="performSearch"
        />
      </template>
      <template #bottom-pane>
        <TranslateTarget
          :is-loading="isLoading"
          :languages="languages"
          :source-language="sourceLanguage"
          :target-language="targetLanguage"
          @on-translate="performSearch"
        />
      </template>
    </Divider>
    <TranslateTargetCount />
  </div>
</template>

<script lang="ts" setup>
  import { computed, onMounted } from 'vue'
  import { useStore } from 'vuex'
  import { RequestStatus } from '@/enum/request-status'
  import {
    ACTION_LANGUAGES_GET,
    ACTION_TRANSLATION_TRANSLATE,
    GETTER_LANGUAGES_LIST,
    GETTER_LANGUAGES_SOURCE_LANGUAGE,
    GETTER_LANGUAGES_STATUS,
    GETTER_LANGUAGES_TARGET_LANGUAGE,
    GETTER_TRANSLATION_TEXT
  } from '@/store/types'

  import Divider from '@/components/ui/Divider.vue'
  import TranslateSource from '@/components/translate/TranslateSource.vue'
  import TranslateTarget from '@/components/translate/TranslateTarget.vue'
  import TranslateTargetCount from '@/components/translate/TranslateTargetCount.vue'

  const store = useStore()
  const languages = computed(() => store.getters[GETTER_LANGUAGES_LIST])
  const isLoading = computed(
    () => store.getters[GETTER_LANGUAGES_STATUS] === RequestStatus.Loading
  )
  const sourceLanguage = computed(
    () => store.getters[GETTER_LANGUAGES_SOURCE_LANGUAGE]
  )
  const targetLanguage = computed(
    () => store.getters[GETTER_LANGUAGES_TARGET_LANGUAGE]
  )
  const translationText = computed(() => store.getters[GETTER_TRANSLATION_TEXT])

  const performSearch = () => {
    if (translationText.value) { // Prevent server error
      store.dispatch(ACTION_TRANSLATION_TRANSLATE, {
        text: translationText.value,
        sourceLanguage: sourceLanguage.value || 'en',
        targetLanguage: targetLanguage.value || 'de'
      })
    }
  }

  onMounted(() => {
    store.dispatch(ACTION_LANGUAGES_GET)
  })
</script>
