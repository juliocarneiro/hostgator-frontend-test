import { renderHook } from '@testing-library/react-hooks'
import Main from '.'

describe('should render Main', () => {
  test('<Main /> to be visible', async () => {
    const { result, waitForNextUpdate } = renderHook(() => Main())
    await waitForNextUpdate()
    expect(result).toMatchSnapshot()
  })
})
