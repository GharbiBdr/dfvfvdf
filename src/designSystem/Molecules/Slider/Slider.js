import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import DSSlider from '../../Atoms/DSSlider/DSSlider'
import DSLabel from '../../Atoms/DSLabel/DSLabel'
import Style from '../../../assets/styles/Style'
import Colors from '../../../assets/styles/Colors'

const Slider = (props) => {
  const displayValueLabels = () => {
    if (props.valueLabelStart && props.valueLabelEnd) {
      return (
        <View style={Style.sliderValuesContainer}>
          <DSLabel
            style={Style.sliderValuesLabel}
          >
            {props.valueLabelStart}
          </DSLabel>
          <DSLabel
            style={Style.sliderValuesLabel}
          >
            {props.valueLabelEnd}
          </DSLabel>
        </View>
      )
    }

    return null
  }
  return (
    <View style={Style.slider}>
      <DSSlider
        value={props.value}
        containerStyle={Style.sliderContainer}
        minimumValue={props.minimumValue}
        maximumValue={props.maximumValue}
        step={props.step}
        disabled={props.disabled}
        maximumTrackTintColor={Colors.grey2}
        minimumTrackTintColor={Colors.primary}
        thumbStyle={Style.sliderThumb}
        {...(props.onValueChange !== undefined && { onValueChange: props.onValueChange })}
      />
      {displayValueLabels()}
    </View>
  )
}

Slider.defaultProps = {
  value: [0],
  disabled: false,
  minimumValue: 0,
  maximumValue: 100,
  step: 1,
  valueLabelStart: null,
  valueLabelEnd: null
}

Slider.propTypes = {
  value: PropTypes.arrayOf(PropTypes.number),
  disabled: PropTypes.bool,
  minimumValue: PropTypes.number,
  maximumValue: PropTypes.number,
  step: PropTypes.number,
  onValueChange: PropTypes.func,
  valueLabelStart: PropTypes.string,
  valueLabelEnd: PropTypes.string
}

export default Slider
