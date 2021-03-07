import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import Style from '../../../assets/styles/Style'

const DSP = (props) => {
  let stAlign = Style.pTextJustify
  if (props.textAlign === 'left') {
    stAlign = Style.pTextLeft
  }
  return (
        <Text
            style={[
              Style.p,
              stAlign
            ]}
        >
            {props.children}
        </Text>
  )
}

DSP.defaultProps = {
  textAlign: 'justify'
}

DSP.proptypes = {
  textAlign: PropTypes.oneOf(['justify', 'left'])
}

export default DSP
