import React from 'react'
import { ComponentMeta, Story } from '@storybook/react'
import Filter from './index'
import { TFilterProps } from './TFilterProps'

export default {
  title: 'Components/Filter',
  component: Filter,
  argTypes: {
    selectedTime: { control: 'text', defaultValue: 'month' },
    setSelectedTime: { control: 'text', defaultValue: 'month' }
  }
} as ComponentMeta<typeof Filter>

const Template: Story<TFilterProps> = (args) => <Filter {...args} />

export const Default = Template.bind({})
