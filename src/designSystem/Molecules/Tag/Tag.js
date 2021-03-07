import React from 'react'
import { View } from 'react-native'
import DSIcon from '../../Atoms/DSIcon/DSIcon'
import Style from '../../../assets/styles/Style'
import PropTypes from 'prop-types'
import Colors from '../../../assets/styles/Colors'
import DSLabel from '../../Atoms/DSLabel/DSLabel'

const Tag = (props) => {
  let Font = Style.FontBlackTag
  let theme = Style.themeWhiteTag
  if (props.Tagged) {
    Font = Style.FontWhiteTag
    theme = Style.themePrimaryTag
  }
  const displayBoutonIcon = () => {
    if (props.Icon) {
      return (
        <DSIcon
          size="xxx-small"
          name={props.Icon}
          color={Colors.white}
          {...(props.onPress !== undefined && { onPress: props.onPress })}
        />
      )
    }
  }
  const displayTagContent = (Font) => {
    return (
      <DSLabel
        style={[Style.btnLabelLefTagged, Font]}>
        {props.text}
      </DSLabel>
    )
  }
  return (
    <View style={[Style.StyleTag, theme]}>
      <View style={Style.TagContentStyle} >
        {displayTagContent(Font)}
      </View>
      <View style={Style.TagIconStyle} >{displayBoutonIcon() }</View>
    </View>
  )
}

Tag.defaultProps = {
  size: 'normal',
  theme: 'default',
  text: '',
  Icon: null,
  Tagged: false
}

Tag.propTypes = {
  size: PropTypes.string,
  theme: PropTypes.string,
  text: PropTypes.string,
  Icon: PropTypes.string,
  onPress: PropTypes.func,
  Tagged: PropTypes.bool
}

export default Tag
