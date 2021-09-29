import Home from '../pages'

export default {
  title: '',
  component: Home
}

const Template = () => <Home {...args} />

export const Default = Template.bind({})

Default.args = {}