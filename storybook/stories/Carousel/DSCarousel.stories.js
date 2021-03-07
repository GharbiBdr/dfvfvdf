
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Carousel } from '../../../src/designSystem/'
import { Dimensions, View, Text } from 'react-native'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const DATA = [
  { text: '#1' },
  { text: '#2' },
  { text: '#3' }
]

const renderItem = data => (
    <View
        key={data.text}
        style={{
          height: windowHeight,
          width: windowWidth,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'green'

        }}
    >
      <Text>{data.text}</Text>
    </View>
)

storiesOf('Carousel', module)
// .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Carousel', () => (
    <Carousel data={DATA} renderItem={renderItem} />
  ))
