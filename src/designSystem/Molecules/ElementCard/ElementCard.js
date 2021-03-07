import { View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Image, Avatar, Label, Icon } from '../..'
import Style from '../../../assets/styles/Style'
import PropTypes from 'prop-types'
import Colors from '../../../assets/styles/Colors'

const ElementCard = (props) => {
  const ShowTitleDescriptionElementCard = () => {
    return (
      <View style={Style.elementPartOfLabel}>
        <Label style={Style.elementFirstLabel}> {props.title}</Label>
        <Label style={Style.elementSecondtLabel}> {props.description}</Label>
      </View>
    )
  }
  const ShowImageElementCard = () => {
    return (
      <View style={Style.elementPartOfImage}>
        <Image source={props.src} />
        {props.check && <Icon color={Colors.primary} name={'check'} size={'small'} style={Style.iconElementCardImage}/>}
      </View>
    )
  }
  const ShowAvatarElementCard = () => {
    return (
      <View>
        <Avatar size={props.size} src={props.src} avatarName={props.avatarName}/>
        {props.check &&
        <Icon color={Colors.primary} name={'check'} size={'small'} style={Style.iconElementCardAvatar}/>}
      </View>
    )
  }
  const ShowElementCard = () => {
    if (props.imageType === 'image') {
      return (
        <View style={props.elementCardView}>
        <TouchableOpacity
          style={[Style.elementPartCardWithOutBordure, props.check ? Style.elementBordure : null]}
          onPress={props.onPressElementCard}>
          {ShowImageElementCard()}
          {ShowTitleDescriptionElementCard()}
        </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View style={props.elementCardView}>
        <TouchableOpacity
          style= {[Style.elementPartCardWithOutBordure, props.check ? Style.elementBordure : null]}
          onPress={props.onPressElementCard}>
          {ShowAvatarElementCard()}
          {ShowTitleDescriptionElementCard()}
        </TouchableOpacity>
        </View>
      )
    }
  }
  return (
    ShowElementCard()
  )
}
ElementCard.defaultProps = {
  id: '',
  size: 'small',
  src: '',
  title: '',
  description: '',
  avatarName: '',
  check: false,
  imageType: 'image',
  onPressElementCard: null,
  elementCardView: Style.elementCardView
}
ElementCard.propTypes = {
  id: '',
  size: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  avatarName: PropTypes.string,
  check: PropTypes.bool,
  imageType: PropTypes.oneOf(['avatar', 'image']),
  onPressElementCard: PropTypes.func
}

export default ElementCard
