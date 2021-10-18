import Toast from '../toast'
import { NormalTypes } from '../../utils/theme/propTypes'
import { mount } from '@vue/test-utils'
describe('Toast', () => {
  it('should render as element', () => {
    const wrapper = mount(Toast, {
      props: {
        text: 'Test Message',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('.fect-toast__message').text()).toBe('Test Message')
  })

  it('should support different types', () => {
    const wrapper = mount({
      setup() {
        return {
          types: ['default', 'success', 'warning', 'error'] as NormalTypes[],
        }
      },
      render() {
        return (
          <>
            {this.types.map((type, idx) => (
              <Toast type={type} key={`${type}+${idx}`} text={idx} />
            ))}
          </>
        )
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
