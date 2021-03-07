import React from 'react'
import { View } from 'react-native'
import Style from '../../../assets/styles/Style'

const DSCard = (props) => {
  return (
        <View style={Style.card}>
            {props.children}
        </View>
  )
}

export default DSCard
