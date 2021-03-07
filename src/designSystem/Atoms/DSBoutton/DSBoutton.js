import React from 'react'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import Style from '../../../assets/styles/Style'

const DSBoutton = (props) => {
  return (
        <TouchableOpacity
            style={[props.style, props.disabled ? Style.btnDisabled : null]}
            delayLongPress={props.delayLongPress}
            disabled={props.disabled}
            {...(props.onLongPress!==undefined && props.disabled===false && { onLongPress: props.onLongPress})}
            {...(props.onPress!==undefined && props.disabled!==true && { onPress: props.onPress})}
            {...(props.onPressIn!==undefined && props.disabled!==true && {onPressIn: props.onPressIn})}
            {...(props.onPressOut!==undefined && props.disabled!==true && {onPressOut: props.onPressOut})}
        >
            {props.children}
        </TouchableOpacity>
  )
}

DSBoutton.defaultProps = {
  delayLongPress: 500,
  disabled: false
}

DSBoutton.propTypes = {
  delayLongPress: PropTypes.number,
  disabled: PropTypes.bool,
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func
}

export default DSBoutton
