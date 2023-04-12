import { Meta, StoryObj } from '@storybook/react'
import Input from './Input'

const config: Meta<typeof Input> = {
  title: 'input',
  component: Input,
}

export default config

type Story = StoryObj<typeof Input>

export const Primary: Story = {}
