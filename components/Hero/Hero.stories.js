import Hero from '.'

export default {
  title: 'Screens/Hero',
  component: Hero
}

const Template = (args) => <Hero {...args} />

export const Default = Template.bind({})

Default.args = {}