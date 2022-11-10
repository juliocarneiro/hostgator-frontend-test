import { render } from '@testing-library/react'

import Header from '.'

describe('<Header />', () => {
  test('should render the logo in header', () => {
    const { container } = render(<Header />)
    expect(container.querySelector('img')).toBeVisible()
  })
  test('should principal text exist', () => {
    const { container, getByTestId } = render(<Header />)
    const input = getByTestId('principal-text')

    expect(input).toHaveTextContent('Hospedagem de Sites')
  })
})
