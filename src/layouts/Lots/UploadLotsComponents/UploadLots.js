import React, { useState, forwardRef } from 'react'
import { Dimensions, FlatList, ScrollView, TouchableOpacity, View } from 'react-native'
import { Button, Icon, Image, Label } from '../../../designSystem'
import Style from '../../../assets/styles/Style'
import PropTypes from 'prop-types'
import ImagePicker from 'react-native-image-crop-picker'
import { FR } from '../../../Lang/Lang'
import Colors from '../../../assets/styles/Colors'

const windowWidth = Dimensions.get('window').width

const UploadLots = forwardRef((props, ref) => {
    const [isInvalid, setIsInvalid] = useState(false)

    const calculeWidht = () => {
        if (props.images.length &&  props.images.length<2) {
            return windowWidth - props.images.length * (133 + 8) - 40
        } else if(props.images.length &&  props.images.length>2) {
            return windowWidth - props.images.length * (133 + 8) - 40
        }else {
            return windowWidth - 40
        }
           
    }
    const onUpload = () => {
        try {
            ImagePicker.openPicker({
                width: props.imageWidth,
                height: props.imageHeight,
                cropping: true
            }).then(image => {
                const path = image.path
                const aux = path.split('/')
                const res = {
                    fileCopyUri: image.path,
                    name: aux[aux.length - 1],
                    size: image.size,
                    type: image.mime,
                    uri: image.path
                }
                props.onRightIconPress && props.onRightIconPress(res)
            })
        } catch (error) {
            setIsInvalid(true)
            displayErrorMessage()
        }
    }

    const displayErrorMessage = () => {
        if (props.missingImage) {
            return (
                <Label style={Style.textInputErrorMessageStyle1}>
                    {FR.atLeastImage}
                </Label>
            )
        }
        if (isInvalid) {
            return (
                <Label style={Style.textInputErrorMessageStyle1}>
                    {FR.invalidImage}
                </Label>
            )
        }
    }



    const displayImages = () => {
        if (props.images.length) {
            return (
                <FlatList
                    keyExtractor={item => item}
                    horizontal={true}
                    data={props.images}
                    renderItem={({ item, index }) => (
                        <View style={Style.addLotsImagesContainer}>
                            <Icon
                                size="small"
                                name="x"
                                color={Colors.white}
                                style={Style.addLotsImageClose}
                                onPress={() => props.onDeleteImage(index)}
                            />
                            <Image source={item} width={133} />
                        </View>
                    )}
                />
            )
        }
    }

    const buttonStyle = () => {
        if (calculeWidht() > 154) {
            return [Style.uploadImageLotsContainer, Style.borderRadiusUpload, { width: calculeWidht() }]
        } else {
            return [Style.uploadImageLotsContainer, { width: calculeWidht() }]
        }

    }

    return (
        <>
            <ScrollView
                ref={ref}
                horizontal={true}
                contentContainerStyle={{ height: 105 }}
            >
                {displayImages()}
                <TouchableOpacity style={buttonStyle()} >
                    {calculeWidht() > 154 ?
                        <Button
                            onPress={onUpload}
                            theme='transparent'
                            text={'Ajouter des photos'}
                            icon={"camera"}
                            size="small"
                        />
                        :
                        <TouchableOpacity onPress={onUpload} style={[Style.minimizeUploadButton]}>
                            <Icon size="small" onPress={onUpload} color={Colors.primary} name="plus" />
                        </TouchableOpacity>
                    }

                </TouchableOpacity>

            </ScrollView>
            {displayErrorMessage()}
        </>
    )
})

UploadLots.propTypes = {
    uploadContainer: PropTypes.object,
    images: PropTypes.array,
    missingImage: PropTypes.bool,
    onRightIconPress: PropTypes.func,
    imageWidth: PropTypes.number,
    imageHeight: PropTypes.number
}

UploadLots.defaultProps = {
    uploadContainer: Style.uploadImageLotsContainer
}

export default UploadLots
