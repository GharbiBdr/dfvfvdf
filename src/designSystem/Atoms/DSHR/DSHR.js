import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import Style from '../../../assets/styles/Style'

const DSHR = (props) => {
  let size = Style.hrMedium
  if (props.size === 'small') {
    size = Style.hrSmall
  } else if (props.size === 'large') {
    size = Style.hrLarge
  }

  let theme = Style.hrDefault
  if (props.theme === 'primary') {
    theme = Style.hrPrimary
  }
  return (

    <View
      style={[
        size,
        theme,
        {
          width: props.width === 'Full' ? '100%' : props.width
        }
      ]}
    >

    </View>
  )
}

DSHR.defaultProps = {
  size: 'medium',
  theme: 'default',
  width: 'full'
}

DSHR.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  theme: PropTypes.oneOf(['default', 'primary']),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default DSHR
