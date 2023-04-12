import { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const config: Meta<typeof Button> = {
  title: 'button',
  component: Button,
  argTypes: {
    children: {
      name: 'children',
      type: 'string',
      description: '버튼 안에 들어갈 내용',
      defaultValue: '김성훈 바보',
    },
  },
}

export default config

type Story = StoryObj<typeof Button>

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
  args: {
    children: '김성훈 바보',
  },
}
