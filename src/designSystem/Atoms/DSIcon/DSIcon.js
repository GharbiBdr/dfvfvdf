import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import fontelloConfig from '../../../assets/fontIconsConfig/selection.json'
import Colors from '../../../assets/styles/Colors'

const Icon = createIconSetFromIcoMoon(fontelloConfig)

const DSIcon = (props) => {
  let size = 20
  if (props.size === 'xxx-small') {
    size = 10
  }
  if (props.size === 'extra-small') {
    size = 14
  }
  if (props.size === 'medium') {
    size = 40
  }
  if (props.size === 'large') {
    size = 60
  }
  if (props.size === 'extra-large') {
    size = 80
  }
  return (
        <TouchableOpacity
            {...(props.onLongPress !== undefined && { onLongPress: props.onLongPress })}
            {...(props.onPress !== undefined && { onPress: props.onPress })}
            {...(props.onPressIn !== undefined && { onPressIn: props.onPressIn })}
            {...(props.onPressOut !== undefined && { onPressOut: props.onPressOut })}
            {...(props.style !== undefined && { style: props.style })}
        >
            <Icon name={props.name} size={size} color={props.color} />
        </TouchableOpacity>
  )
}

DSIcon.defaultProps = {
  color: Colors.black,
  size: 'small', // 'small', 'medium' , 'large', 'extra-large',
  name: 'eye'
}

DSIcon.propTypes = {
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
  name: PropTypes.string,
  size: PropTypes.oneOf(['xxx-small', 'extra-small', 'small', 'medium', 'large', 'extra-large']),
  color: PropTypes.string
}

export default DSIcon
