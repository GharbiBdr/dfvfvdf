import React from 'react'
import { TextInput } from 'react-native'
import PropTypes from 'prop-types'
import Colors from '../../../assets/styles/Colors'
import Style from '../../../assets/styles/Style'

const DSTextInput = (props) => {
  return (
        <TextInput
            allowFontScaling={props.allowFontScaling}
            autoCapitalize={props.autoCapitalize}
            autoCorrect={props.autoCorrect}
            defaultValue={props.defaultValue}
            editable={props.editable}
            keyboardType={props.keyboardType}
            {...(props.maxLength !== undefined && { maxLength: props.maxLength })}
            multiline={props.multiline}
            numberOfLines={props.numberOfLines}
            {...(props.onBlur !== undefined && { onBlur: props.onBlur })}
            {...(props.onChange !== undefined && { onChange: props.onChange })}
            {...(props.onChangeText !== undefined && { onChangeText: props.onChangeText })}
            {...(props.onContentSizeChange !== undefined && { onContentSizeChange: props.onContentSizeChange })}
            {...(props.onEndEditing !== undefined && { onEndEditing: props.onEndEditing })}
            {...(props.onFocus !== undefined && { onFocus: props.onFocus })}
            {...(props.onKeyPress !== undefined && { onKeyPress: props.onKeyPress })}
            {...(props.onLayout !== undefined && { onLayout: props.onLayout })}
            {...(props.onScroll !== undefined && { onScroll: props.onScroll })}
            {...(props.onSelectionChange !== undefined && { onSelectionChange: props.onSelectionChange })}
            {...(props.onSubmitEditing !== undefined && { onSubmitEditing: props.onSubmitEditing })}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            returnKeyType={props.returnKeyType}
            secureTextEntry={props.secureTextEntry}
            {...(props.selectionColor !== undefined && { selectionColor: props.selectionColor })}
            selectTextOnFocus={props.selectTextOnFocus}
            style={props.style}
            {...(props.value !== undefined && { value: props.value })}
        />
  )
}

DSTextInput.defaultProps = {
  allowFontScaling: false,
  autoCapitalize: 'sentences', // 'none', 'sentences', 'words', 'characters'
  autoCorrect: false,
  defaultValue: '',
  editable: true,
  keyboardType: 'default', // 'default', 'number-pad', 'decimal-pad', 'numeric', 'email-address', 'phone-pad'
  maxLength: undefined,
  multiline: false,
  numberOfLines: 5,
  placeholder: '',
  placeholderTextColor: Colors.grey1,
  returnKeyType: 'done', // 'done', 'go', 'next', 'search', 'send',
  secureTextEntry: false,
  selectTextOnFocus: false,
  style: Style.TextInputStyle1
}

DSTextInput.propTypes = {
  allowFontScaling: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  autoCorrect: PropTypes.bool,
  defaultValue: PropTypes.string,
  editable: PropTypes.bool,
  keyboardType: PropTypes.string,
  maxLength: PropTypes.number,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onChangeText: PropTypes.func,
  onContentSizeChange: PropTypes.func,
  onEndEditing: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyPress: PropTypes.func,
  onLayout: PropTypes.func,
  onScroll: PropTypes.func,
  onSelectionChange: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  returnKeyType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  selectionColor: PropTypes.string,
  selectTextOnFocus: PropTypes.bool,
  value: PropTypes.string
}

export default DSTextInput
