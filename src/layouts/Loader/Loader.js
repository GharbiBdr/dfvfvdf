import React from 'react'
import {View, ActivityIndicator} from "react-native"
import Style from '../../assets/styles/Style'
import Colors from '../../assets/styles/Colors'
export default function Loader (props) {
  return (
    <View style={Style.layoutLoader}>
        <ActivityIndicator size="large" color={Colors.primary} />
    </View>
       
  )
}


