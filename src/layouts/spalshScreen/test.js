import { View } from 'react-native'
import React from 'react'
import { ElementCard } from '../../designSystem'

const Test = () => {
  return (
    <View>
      <ElementCard id='' title={'Elyes Said'} src={require('./avatar1.jpg')} avatarName={'ES'} size={'medium'}
                   description={'02136'} check={true} imageType={'image'} onPressElementCard={''}/>
    </View>

  )
}
export default Test
