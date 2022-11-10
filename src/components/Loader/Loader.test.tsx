import { render } from '@testing-library/react'

import Loader from '.'

describe('<Loader />', () => {
  it('should render the loader', () => {
    const { getByTestId } = render(<Loader isLoading={true} />)

    const loading = getByTestId('loader')
    expect(loading).toBeInTheDocument()
  })
})
