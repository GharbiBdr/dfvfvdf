import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Colors from '../../assets/styles/Colors'
import Style from '../../assets/styles/Style'
import PropTypes from 'prop-types'
import {  Icon, Label } from '../../designSystem'

const Header = (props) => {
  const renderLeftItem = () => {
    if (props.leftIconName) {
      return <Icon
        name={props.leftIconName}
        size="small"
        color={Colors.white}
        {...props.handleLeftAction && { onPress: props.handleLeftAction }}
      />
    } else {
      return <TouchableOpacity {...props.handleLeftAction && { onPress: props.handleLeftAction }}>
        <Label style={props.LeftLabelStyle}>{props.leftLabel}</Label>
      </TouchableOpacity >
    }
  }
  const renderRightItem = () => {
    if (props.rightIconName) {
      return <Icon
        name={props.rightIconName}
        size="small"
        color={Colors.white}
        {...props.handleRightAction && { onPress: props.handleRightAction }}
      />
    } else {
      return <TouchableOpacity {...props.handleRightAction && { onPress: props.handleRightAction }}>
        <Label style={props.rightLabelStyle}>{props.rightLabel}</Label>
      </TouchableOpacity >
    }
  }

  return (
    <View style={Style.headerContainer} >
      <View style={Style.hedearLeftIconContainer} >
        {renderLeftItem()}
      </View>
      <View  style={Style.hedearCenterContainer} >
        <Label style={Style.headerScreenNameLabel}>
          {props.screenName}
        </Label>
      </View >
      <View style={Style.hedearRightIconContainer}>
        {renderRightItem()}
      </View>
    </View>
  )
}

Header.defaultProps = {
  screenName: '',
  rightLabelStyle: Style.headerSecondaryLabel,
  LeftLabelStyle: Style.headerSecondaryLabel,
  rightLabel: '',
  leftLabel: '',
  leftIconName: '',
  rightIconName: ''
}

Header.propTypes = {
  screenName: PropTypes.string,
  rightLabelStyle: PropTypes.object,
  LeftLabelStyle: PropTypes.object,
  rightLabel: PropTypes.string,
  leftLabel: PropTypes.string,
  handleLeftAction: PropTypes.func,
  handleRightAction: PropTypes.func,
  leftIconName: PropTypes.string,
  rightIconName: PropTypes.string,
  navigation: PropTypes.object
}

export default Header
