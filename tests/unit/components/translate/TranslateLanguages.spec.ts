import { mount } from '@vue/test-utils'
import TranslateLanguages from '@/components/translate/TranslateLanguages.vue'

describe('TranslateLanguages', () => {
  it('renders a title', () => {
    const wrapper = mount(TranslateLanguages, {
      props: {
        title: 'Source',
        selected: 'en',
        languages: [
          { code: 'en', name: 'English' },
          { code: 'de', name: 'German' }
        ],
        isLoading: false,
        isAutoDetected: false,
        disabledLanguageCode: 'de'
      }
    })

    expect(wrapper.find('.title').text()).toBe('Source')
  })

  it('renders language items', () => {
    const wrapper = mount(TranslateLanguages, {
      props: {
        title: 'Source',
        selected: 'de',
        languages: [
          { code: 'en', name: 'English' },
          { code: 'de', name: 'German' }
        ],
        isLoading: false,
        isAutoDetected: false,
        disabledLanguageCode: 'en'
      }
    })

    const languageItems = wrapper.findAll('.language-item')
    expect(languageItems.length).toBe(2)
  })

  it('emits changeLanguage event when a language is clicked', async () => {
    const wrapper = mount(TranslateLanguages, {
      props: {
        title: 'Source',
        selected: 'en',
        languages: [
          { code: 'en', name: 'English' },
          { code: 'de', name: 'German' }
        ],
        isLoading: false,
        isAutoDetected: false,
        disabledLanguageCode: ''
      }
    })

    const languageItem = wrapper.find('.language-item:nth-child(3)') // clicked on de
    await languageItem.trigger('click')

    expect(wrapper.emitted('changeLanguage')).toBeTruthy()
  })

  it('render for auto-detected language', () => {
    const wrapper = mount(TranslateLanguages, {
      global: {
        mocks: {
          $t: (msg: any) => msg
        }
      },
      props: {
        title: 'Source',
        selected: 'en',
        languages: [
          { code: 'en', name: 'English' },
          { code: 'de', name: 'German' }
        ],
        isLoading: false,
        isAutoDetected: true,
        disabledLanguageCode: ''
      }
    })

    const autoDetectedLanguageItem = wrapper.find('.auto-detected')
    expect(autoDetectedLanguageItem.exists()).toBe(true)
  })

  it('handles isLoading prop correctly', () => {
    const wrapper = mount(TranslateLanguages, {
      props: {
        title: 'Source',
        selected: 'en',
        languages: null,
        isLoading: true,
        isAutoDetected: false,
        disabledLanguageCode: ''
      }
    })

    const loadingIndicator = wrapper.find('.circle-loading')
    expect(loadingIndicator.exists()).toBe(true)

    const languageItems = wrapper.findAll('.language-item')
    expect(languageItems.length).toBe(0)
  })
})
