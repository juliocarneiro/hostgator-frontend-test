import React from 'react'
import { ComponentMeta, Story } from '@storybook/react'
import Plans from './index'
import { TPlansProps } from './TPlansProps'

export default {
  title: 'Components/Plans',
  component: Plans,
  argTypes: {
    productsData: {
      control: 'array',
      defaultValue: [
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
      ]
    },
    selectedTime: { control: 'text', defaultValue: 'month' }
  }
} as ComponentMeta<typeof Plans>

const Template: Story<TPlansProps> = (args) => <Plans {...args} />

export const Default = Template.bind({})
