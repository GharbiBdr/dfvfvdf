import React from 'react'
import { View } from 'react-native'
import Style from '../../../assets/styles/Style'

const DSContainer = (props) => {
  return (
        <View style={Style.container}>
            {props.children}
        </View>
  )
}

DSContainer.defaultProps = {

}

export default DSContainer
