import { render, fireEvent } from '@testing-library/react'

import Filter from '.'

type FilterType = {
  selectedTime: string
  setSelectedTime: (ev: string) => void
}

describe('<Filter />', () => {
  let expectedProps: FilterType

  beforeEach(() => {
    expectedProps = {
      selectedTime: 'year',
      setSelectedTime: jest.fn()
    }
  })

  const setup = () => {
    const utils = render(<Filter {...expectedProps} />)
    const inputYear = document.getElementById('year') as HTMLInputElement
    const inputMonth = document.getElementById('month') as HTMLInputElement
    const inputThreeYears = document.getElementById(
      'three_years'
    ) as HTMLInputElement

    return {
      inputMonth,
      inputThreeYears,
      inputYear,
      ...utils
    }
  }

  test('should choice text exist', () => {
    const { container, getByTestId } = render(<Filter {...expectedProps} />)
    const input = getByTestId('choice-text')

    expect(input).toHaveTextContent('Quero pagar a cada:')
  })

  test('Three input elements exist', () => {
    const { container } = setup()
    const inputs = container.querySelectorAll('input[value][type="radio"]')
    expect(inputs.length).toBe(3)
  })

  test('Input THREE YEARS to be visible', () => {
    const { inputThreeYears } = setup()
    fireEvent.click(inputThreeYears)
    expect(inputThreeYears.value).toBe('three_years')
  })

  test('Input ONE YEARS to be visible', () => {
    const { inputYear } = setup()
    fireEvent.click(inputYear)
    expect(inputYear.value).toBe('year')
  })

  test('Input MONTH to be visible', () => {
    const { inputMonth } = setup()
    fireEvent.click(inputMonth)
    expect(inputMonth.value).toBe('month')
  })
})
