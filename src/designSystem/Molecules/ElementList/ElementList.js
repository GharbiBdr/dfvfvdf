import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Image, Label } from '../..'
import Style from '../../../assets/styles/Style'
import PropTypes from 'prop-types'

const ElementList = (props) => {
    const showElementList = () => {
        return (
            <View style={props.containerStyle}>
                <TouchableOpacity
                    style={props.elementStyle}
                    onPress={props.onPressElementList}
                >
                    <View style={props.imageStyle}>
                        <Image
                            source={props.src}
                        />
                    </View>
                    <View style={props.descriptionContainerStyle}>
                        <Label style={props.contactNameStyle}>{props.title}</Label>
                        <Label style={props.descriptionStyle}>{props.description}</Label>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        showElementList()
    )
}
ElementList.defaultProps = {
    src: null,
    title: null,
    description: null,
    onPressElementList: null,
    contactNameStyle: Style.contactNameListElement,
    descriptionStyle: Style.contactDescriptionListElement,
    containerStyle: Style.containerElementList,
    elementStyle: Style.elementListView,
    imageStyle: Style.imageListElement,
    descriptionContainerStyle: Style.containerDescriptionElementList
}
ElementList.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    contactNameStyle: PropTypes.func,
    descriptionStyle: PropTypes.object,
    containerStyle: PropTypes.object,
    elementStyle: PropTypes.object,
    imageStyle: PropTypes.object,
    descriptionContainerStyle: PropTypes.object,
}

export default ElementList