import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import Style from '../../../assets/styles/Style'

const DSLabel = (props) => {
  return (

        <Text
            allowFontScaling={props.allowFontScaling}
            {...(props.onLayout !== undefined && { onLayout: props.onLayout })}
            {...(props.onLongPress !== undefined && { onLongPress: props.onLongPress })}
            {...(props.onPress !== undefined && { onPress: props.onPress })}
            {...(props.onTextLayout !== undefined && { onTextLayout: props.onTextLayout })}
            selectable={props.selectable}
            style={props.style}
        >
            {props.children}
        </Text>
  )
}

DSLabel.defaultProps = {
  allowFontScaling: false,
  selectable: false,
  style: Style.TextInputLabelStyle1
}

DSLabel.propTypes = {
  allowFontScaling: PropTypes.bool,
  onLayout: PropTypes.func,
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  onTextLayout: PropTypes.func,
  selectable: PropTypes.bool
}

export default DSLabel
