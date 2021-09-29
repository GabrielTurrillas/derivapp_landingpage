import Button from '.'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  }
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
export const Secondary = Template.bind({})

Primary.args = {
  label: 'Button',
  type: 'primary',
}

Secondary.args = {
  label: 'Button',
  type: 'secondary',
}