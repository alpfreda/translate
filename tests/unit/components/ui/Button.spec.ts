import { mount } from '@vue/test-utils'
import Button from '@/components/ui/Button.vue'

describe('Button', () => {
  it('renders a button element with default props', () => {
    const wrapper = mount(Button)

    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.find('.button').exists()).toBe(true)
    expect(wrapper.find('button').attributes('type')).toBe('button')
    expect(wrapper.find('button').classes('disabled')).toBe(false)
  })

  it('handles click event when not loading', async () => {
    const wrapper = mount(Button)

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('handle click event when loading', async () => {
    const wrapper = mount(Button, {
      props: {
        isLoading: true
      }
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('adds new class to button element', () => {
    const newClass = 'new-class'
    const wrapper = mount(Button, {
      props: {
        className: newClass
      }
    })

    expect(wrapper.find('.button').classes(newClass)).toBe(true)
  })

  it('renders a button element with type "submit"', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'submit'
      }
    })

    expect(wrapper.find('button').attributes('type')).toBe('submit')
  })

  it('renders a disabled button element when "disabled" prop is true', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      }
    })

    expect(wrapper.find('button').element.disabled).toBe(true)
  })
})
