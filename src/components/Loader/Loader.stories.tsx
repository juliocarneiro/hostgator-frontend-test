import React from 'react'
import { ComponentMeta, Story } from '@storybook/react'
import Loader from './index'
import { TLoadingProps } from './TLoadingProps'

export default {
  title: 'Components/Loader',
  component: Loader,
  argTypes: {
    isLoading: { control: 'boolean', defaultValue: true }
  }
} as ComponentMeta<typeof Loader>

const Template: Story<TLoadingProps> = (args) => <Loader {...args} />

export const Default = Template.bind({})
