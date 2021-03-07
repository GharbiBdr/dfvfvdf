import React from 'react'
import DSBoutton from '../../Atoms/DSBoutton/DSBoutton'
import DSIcon from '../../Atoms/DSIcon/DSIcon'
import DSLabel from '../../Atoms/DSLabel/DSLabel'
import PropTypes from 'prop-types'
import Style from '../../../assets/styles/Style'


const Button = (props) => {
  const displayBoutonContent = (size, theme) => {
    return (
      <DSLabel
        style={[props.center ? Style.btnLabel : Style.btnLabelLeft, size, theme]}
        allowFontScaling={props.allowFontScaling}
      >
        {props.text}
      </DSLabel>
    )
  }


  const displayBoutonIcon = (size, theme) => {
    if (props.icon) {
      return (
        <DSIcon
          size="small"
          name={props.icon}
          color={theme.color}
          style={[props.center ? Style.btnIcon : Style.btnIconLeft]}
          {...(props.onPress !== undefined && { onPress: props.onPress })}
        />
      )
    }
  }

  let btnStSize = Style.btnNormal
  let labelStSize = Style.btnLabelNormal

  if (props.size === 'large') {
    btnStSize = Style.btnLarge
    labelStSize = Style.btnLabelLarge
  } else if (props.size === 'small') {
    btnStSize = Style.btnSmall
    labelStSize = Style.btnLabelSmall
  }

  let btnStTheme = Style.btnPrimary
  let labelStTheme = Style.btnLabelPrimary
  if (props.theme === 'default') {
    btnStTheme = Style.btnDefault
    labelStTheme = Style.btnLabelDefault
  } else if (props.theme === 'transparent') {
    btnStTheme = Style.btnTransparent
    labelStTheme = Style.btnLabelTransparent
  } else if (props.theme === 'secondary') {
    btnStTheme = Style.btnDefault
    labelStTheme = Style.btnLabelTransparent
  }

  return (
    <DSBoutton
      disabled={props.disabled}
      {...(props.onLongPress !== undefined && { onLongPress: props.onLongPress })}
      {...(props.onPress !== undefined && { onPress: props.onPress })}
      {...(props.onPressIn !== undefined && { onPressIn: props.onPressIn })}
      {...(props.onPressOut !== undefined && { onPressOut: props.onPressOut })}
      delayLongPress={props.delayLongPress}
      style={[Style.btn, btnStSize, btnStTheme]}
    >
      {displayBoutonIcon(labelStSize, labelStTheme)}
      {displayBoutonContent(labelStSize, labelStTheme)}
    </DSBoutton>
  )
}

Button.defaultProps = {
  size: 'normal',
  theme: 'default',
  text: 'Button',
  Icon: '',
  allowFontScaling: false,
  disabled: false,
  delayLongPress: 500,
  center: true ,
   
}

Button.propTypes = {
  size: PropTypes.string,
  theme: PropTypes.string,
  text: PropTypes.string,
  Icon: PropTypes.string,
  delayLongPress: PropTypes.number,
  disabled: PropTypes.bool,
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
  allowFontScaling: PropTypes.bool,
  center: PropTypes.bool,

}

export default Button
