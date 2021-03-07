import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Style from '../../../assets/styles/Style'
import DocumentPicker from 'react-native-document-picker'
import TextInput from './../TextInput/TextInput'
import PropTypes from 'prop-types'
import ImagePicker from 'react-native-image-crop-picker'
import { Label } from '../..'
const Upload = (props) => {
  const [isInvalid, setIsInvalid] = useState(false)
  const onUpload = async () => {
    let allowed = []
    if (props.allowedTypes.includes('allFiles')) {
      allowed = [DocumentPicker.types.allFiles]
    } else {
      if (props.allowedTypes.includes('images')) {
        allowed.push(DocumentPicker.types.images)
      }
      if (props.allowedTypes.includes('doc')) {
        allowed.push(DocumentPicker.types.doc)
      }
      if (props.allowedTypes.includes('docx')) {
        allowed.push(DocumentPicker.types.docx)
      }
      if (props.allowedTypes.includes('xls')) {
        allowed.push(DocumentPicker.types.xls)
      }
      if (props.allowedTypes.includes('xlsx')) {
        allowed.push(DocumentPicker.types.xlsx)
      }
      if (props.allowedTypes.includes('pdf')) {
        allowed.push(DocumentPicker.types.pdf)
      }
      if (props.allowedTypes.includes('plainText')) {
        allowed.push(DocumentPicker.types.plainText)
      }
    }

    let res = []
    let file
    try {
      if (props.mulitple) {
        res = await DocumentPicker.pickMultiple({
          type: allowed,
          readContent: true
        })

        props.onRightIconPress && props.onRightIconPress(res)
      } else if (!(props.allowedTypes.includes('images'))) {
        file = await DocumentPicker.pick({
          type: allowed,
          readContent: true
        })

        props.onRightIconPress && props.onRightIconPress(file)
      } else {
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
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        res = []
        props.onRightIconPress && props.onRightIconPress(res)
      } else {
        setIsInvalid(true)
      }
    }
  }

  return (

    <TouchableOpacity
      onPress={onUpload}
    >

      {props.isInput
        ? <TextInput
          editable={false}
          onRightIconPress={onUpload}
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderTextColor}
          rightIcon={props.rightIcon}
          multiline={props.multiline}
          numberOfLines={props.numberOfLines}
          label={props.label}
          value={props.value}
          allowedTypes={props.allowedTypes}
          errorMessage={props.errorMessage}
          isInvalid={isInvalid || props.isInvalid}
        />
        : <Label style={Style.UploadImageTextProfil}>{props.label}</Label>
      }
    </TouchableOpacity>
  )
}

Upload.defaultProps = {
  rightIcon: 'download',
  allowedTypes: ['allFiles'],
  mulitple: false,
  isInput: true,
  imageHeight: 300,
  imageWidth: 400
}

Upload.propTypes = {
  allowedTypes: PropTypes.arrayOf(PropTypes.PropTypes.oneOf(['allFiles', 'images', 'plainText', 'audio', 'pdf', 'zip', 'csv', 'doc', 'docx', 'xls', 'xlsx'])),
  rightIcon: PropTypes.string,
  isInvalid: PropTypes.bool,
  onRightIconPress: PropTypes.func,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  mulitple: PropTypes.bool,
  isInput: PropTypes.bool,
  imageHeight: PropTypes.number,
  imageWidth: PropTypes.number

}

export default Upload
