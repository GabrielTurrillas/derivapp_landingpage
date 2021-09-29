import ImageScreen from '.'

export default {
  title: 'Screens/ImageScreen',
  component: ImageScreen
}

const Template = (args) => <ImageScreen {...args} />

export const Default = Template.bind({})

Default.args = {}