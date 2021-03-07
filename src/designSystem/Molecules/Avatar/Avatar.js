import React from 'react'
import { View } from 'react-native'
import Style from '../../../assets/styles/Style'
import Image from '../../Atoms/DSImage/DSImage'
import PropTypes from 'prop-types'
import Label from '../../Atoms/DSLabel/DSLabel'

const Avatar = (props) => {
  let AvatarSize = Style.avatarMedium
  let AvatarLabelFont = Style.avatarLabelFontMedium
  if (props.size === 'small') {
    AvatarSize = Style.avatarSmall
    AvatarLabelFont = Style.avatarLabelFontSmall
  } else if (props.size === 'big') {
    AvatarSize = Style.avatarBig
    AvatarLabelFont = Style.avatarLabelFontBig
  }
  const displayAvatar = () => {
    if (props.src) {
      return (
        <Image source={props.src}>
        </Image>
      )
    } else {
      return (
        <Label style={AvatarLabelFont}>{props.avatarName}</Label>
      )
    }
  }
  return (
    <View style={AvatarSize}>
      {displayAvatar()}
    </View>
  )
}
Avatar.defaultProps = {
  size: 'medium',
  src: '',
  avatarName: ''
}
Avatar.propTypes = {
  size: PropTypes.string,
  src: PropTypes.oneOf[PropTypes.string,PropTypes.object],
  avatarName: PropTypes.string

}

export default Avatar
