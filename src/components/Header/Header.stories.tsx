import React from 'react'
import { ComponentMeta, Story } from '@storybook/react'
import Header from './index'

export default {
  title: 'Components/Header',
  component: Header
} as ComponentMeta<typeof Header>

const Template: Story = (args) => <Header {...args} />

export const Default = Template.bind({})
