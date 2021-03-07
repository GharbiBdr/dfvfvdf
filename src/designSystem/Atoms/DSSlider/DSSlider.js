import React from "react"
import Slider from "react-native-sliders"
import PropTypes from 'prop-types'
import {View} from "react-native"

const DSSlider = (props) => {
    return(
        <View style={props.sliderContainer}>
            <Slider
                value={props.value}
                minimumValue={props.minimumValue}
                maximumValue={props.maximumValue}
                step={props.step}
                disabled={props.disabled}
                minimumTrackTintColor={props.minimumTrackTintColor}
                maximumTrackTintColor={props.maximumTrackTintColor}
                thumbTintColor={props.thumbTintColor}
                {...(props.onValueChange!==undefined && {onValueChange: props.onValueChange})}
                {...(props.onSlidingStart!==undefined && {onSlidingStart: props.onSlidingStart})}
                {...(props.onSlidingComplete!==undefined && {onSlidingComplete: props.onSlidingComplete})}
                {...(props.sliderStyle!==undefined && {style: props.sliderStyle})}
                {...(props.trackStyle!==undefined && {trackStyle: props.trackStyle})}
                {...(props.thumbStyle!==undefined && {thumbStyle: props.thumbStyle})}
                {...(props.thumbImage!==undefined && {thumbImage: props.thumbImage})}
                animateTransitions={props.animateTransitions}
            />
        </View>
        
    )
}

DSSlider.defaultProps={
    value:[10],
    disabled:false,
    minimumValue:0,
    maximumValue:100,
    step:1,
    minimumTrackTintColor:"red",
    maximumTrackTintColor:"green",
    thumbTintColor:"blue",
    animateTransitions:true,
    sliderContainer:null
}

DSSlider.propTypes={
    value:PropTypes.arrayOf(PropTypes.number),
    disabled:PropTypes.bool,
    minimumValue:PropTypes.number,
    maximumValue:PropTypes.number,
    step:PropTypes.number,
    minimumTrackTintColor:PropTypes.string,
    maximumTrackTintColor:PropTypes.string,
    thumbTintColor:PropTypes.string,
    onValueChange:PropTypes.func,
    onSlidingStart:PropTypes.func,
    onSlidingComplete:PropTypes.func,
    sliderStyle:PropTypes.object,
    trackStyle:PropTypes.object,
    thumbStyle:PropTypes.object,
    thumbImage:PropTypes.object,
    animateTransitions:PropTypes.bool,
    sliderContainer:PropTypes.object
}

export default DSSlider