import React from "react"
import PropTypes from 'prop-types'
import Colors from "../../../assets/styles/Colors"
import {View} from "react-native"

import Modal from 'react-native-modal'

const DSModal=(props)=>{
    
    return(
        <Modal
            animationIn={props.animationIn}
            animationOut={props.animationOut}
            animationInTiming={props.animationInTiming}
            backdropTransitionInTiming={props.animationInTiming}
            animationOutTiming={props.animationOutTiming}
            backdropTransitionOutTiming={props.animationOutTiming}
            avoidKeyboard={props.avoidKeyboard}
            hasBackdrop={props.hasBackdrop}
            backdropColor={props.backdropColor}
            backdropOpacity={props.backdropOpacity}
            customBackdrop={props.customBackdrop}
            isVisible={props.isVisible}
            style={props.containerStyle}
            {...(props.closeOnBackdropPress===true && {onBackdropPress: props.closeModal})}
        >
            <View style={props.contentStyle}>
                {props.children}
            </View>
            
        </Modal>
    )

}

DSModal.defaultProps={
    animationIn:'slideInUp',
    animationOut:'slideOutDown',
    animationInTiming:300,
    animationOutTiming:300,
    avoidKeyboard:false,
    hasBackdrop:true,
    backdropColor:Colors.black,
    backdropOpacity:0.7,
    customBackdrop:null,
    isVisible:false,
    closeOnBackdropPress:false,
    containerStyle:null
}

DSModal.propTypes={
    animationIn:PropTypes.oneOf([
        "bounceIn",
        "bounceInDown",
        "bounceInUp",
        "bounceInLeft",
        "bounceInRight",
        "fadeIn",
        "fadeInDown",
        "fadeInDownBig",
        "fadeInUp",
        "fadeInUpBig",
        "fadeInLeft",
        "fadeInLeftBig",
        "fadeInRight",
        "fadeInRightBig",
        "flipInX",
        "flipInY",
        "lightSpeedIn",
        "slideInDown",
        "slideInUp",
        "slideInLeft",
        "slideInRight",
        "zoomIn",
        "zoomInDown",
        "zoomInUp",
        "zoomInLeft",
        "zoomInRight",
    ]),
    animationOut:PropTypes.oneOf([
        "bounceOut",
        "bounceOutDown",
        "bounceOutUp",
        "bounceOutLeft",
        "bounceOutRight",
        "fadeOut",
        "fadeOutDown",
        "fadeOutDownBig",
        "fadeOutUp",
        "fadeOutUpBig",
        "fadeOutLeft",
        "fadeOutLeftBig",
        "fadeOutRight",
        "fadeOutRightBig",
        "flipOutX",
        "flipOutY",
        "lightSpeedOut",
        "slideOutDown",
        "slideOutUp",
        "slideOutLeft",
        "slideOutRight",
        "zoomOut",
        "zoomOutDown",
        "zoomOutUp",
        "zoomOutLeft",
        "zoomOutRight",
    ]),
    animationInTiming:PropTypes.number,
    animationOutTiming:PropTypes.number,
    avoidKeyboard:PropTypes.bool,
    hasBackdrop:PropTypes.bool,
    backdropColor:PropTypes.string,
    backdropOpacity:PropTypes.number,
    customBackdrop:PropTypes.node,
    isVisible:PropTypes.bool,
    closeOnBackdropPress:PropTypes.bool,
    closeModal:PropTypes.func,
    containerStyle:PropTypes.object
}

export default DSModal