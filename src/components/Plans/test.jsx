import { render } from '@testing-library/react'

import Plans from '.'
import Plan from './Plan'
import PlanBody from './PlanBody'

describe('<Plans />', () => {
  test('should render 3 Plans', () => {
    const { container } = render(
      <Plans
        selectedTime={'year'}
        productsData={[
          {
            name: 'Plano P',
            id: '1',
            cycle: [
              {
                annually: { priceOrder: 10, months: 1 },
                triennially: { priceOrder: 10, months: 1 },
                monthly: { priceOrder: 10, months: 1 }
              }
            ]
          },
          {
            name: 'Plano M',
            id: '2',
            cycle: [
              {
                annually: { priceOrder: 10, months: 1 },
                triennially: { priceOrder: 10, months: 1 },
                monthly: { priceOrder: 10, months: 1 }
              }
            ]
          },
          {
            name: 'Plano Turbo',
            id: '3',
            cycle: [
              {
                annually: { priceOrder: 10, months: 1 },
                triennially: { priceOrder: 10, months: 1 },
                monthly: { priceOrder: 10, months: 1 }
              }
            ]
          }
        ]}
      />
    )
    expect(container.querySelectorAll('.plan-body').length).toBe(3)
    expect(container).toMatchSnapshot()
  })
  test('<Plan />', () => {
    const { container, getByTestId } = render(
      <Plan
        selectedTime={'year'}
        productsData={{
          name: 'Plano P',
          id: '1',
          cycle: [
            {
              annually: { priceOrder: 10, months: 1 },
              triennially: { priceOrder: 10, months: 1 },
              monthly: { priceOrder: 10, months: 1 }
            }
          ]
        }}
      />
    )
    const planFooter = getByTestId('plan-footer')
    expect(planFooter).toHaveTextContent('Contas de E-mail')

    expect(container.querySelector('img')).toBeVisible()
    expect(container).toMatchSnapshot()
  })
  test('<PlanBody />', () => {
    const { container } = render(
      <PlanBody
        midPlan={false}
        price={100}
        percent={40}
        month={12}
        selectedTime="annually"
        promoCode="PROMOHG40"
        id={2}
        name={'Plan M'}
      />
    )
    expect(container.querySelectorAll('.plan-body > div > p'))
    expect(container.querySelectorAll('.plan-body')).toMatchSnapshot()
  })
})
