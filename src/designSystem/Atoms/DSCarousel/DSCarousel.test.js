import React from 'react'
import renderer from 'react-test-renderer'
import DSCarousel from './DSCarousel'
import { View, Dimensions, Text } from 'react-native'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

describe('test carousel', () => {
  it('test carousel snapshot', () => {
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

    const wrapper = renderer.create(<DSCarousel data={DATA} renderItem={renderItem} />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
