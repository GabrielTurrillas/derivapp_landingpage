import Home from '../pages'

export default {
  title: 'Page/Home',
  component: Home
}

const Template = (args) => <Home {...args} />

export const Default = Template.bind({})

Default.args = {}