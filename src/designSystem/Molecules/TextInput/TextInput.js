import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import DSTextInput from '../../Atoms/DSTextInput/DSTextInput'
import DSLabel from '../../Atoms/DSLabel/DSLabel'
import Colors from '../../../assets/styles/Colors'
import Style from '../../../assets/styles/Style'
import DSIcon from '../../Atoms/DSIcon/DSIcon'

const TextInput = (props) => {
  const [focused, setFocused] = React.useState(false)
  const [passwordHidden, setPasswordHidden] = React.useState(true)

  const displayStyle1 = () => {
    return (
      <View style={Style.TextInputViewStyle1}>
        <DSTextInput
          {...(props.value !== undefined && { value: props.value })}
          value={props.value}

          onFocus={() => {
            setFocused(true)
            if (props.onFocus !== undefined) {
              props.onFocus()
            }
          }}
          onBlur={() => {
            setFocused(false)
            if (props.onBlur) {
              props.onBlur()
            }
          }}
          placeholder={focused ? '' : props.placeholder}
          autoCapitalize={props.autoCapitalize}
          autoCorrect={props.autoCorrect}
          editable={props.editable}
          keyboardType={props.keyboardType}
          {...(props.maxLength !== undefined && { maxLength: props.maxLength })}
          multiline={props.multiline}
          numberOfLines={props.numberOfLines}
          {...(props.onChange !== undefined && { onChange: props.onChange })}
          {...(props.onChangeText !== undefined && { onChangeText: props.onChangeText })}
          {...(props.onContentSizeChange !== undefined && { onContentSizeChange: props.onContentSizeChange })}
          {...(props.onEndEditing !== undefined && { onEndEditing: props.onEndEditing })}
          {...(props.onKeyPress !== undefined && { onKeyPress: props.onKeyPress })}
          {...(props.onLayout !== undefined && { onLayout: props.onLayout })}
          {...(props.onScroll !== undefined && { onScroll: props.onScroll })}
          {...(props.onSelectionChange !== undefined && { onSelectionChange: props.onSelectionChange })}
          {...(props.onSubmitEditing !== undefined && { onSubmitEditing: props.onSubmitEditing })}
          placeholderTextColor={props.placeholderTextColor}
          returnKeyType={props.returnKeyType}
          secureTextEntry={(props.type === 'password' && passwordHidden)}
          {...(props.selectionColor !== undefined && { selectionColor: props.selectionColor })}
          selectTextOnFocus={props.selectTextOnFocus}
          style={[Style.TextInputStyle1, props.multiline ? Style.textInputMultiline : null]}

        />
        {displayRightIcon()}
        {displayPasswordClosedShape()}
        {displayLabelStyle1()}
        {displayValididyCriterias()}
        {displayErrorMessageStyle1()}

      </View>
    )
  }

  const displayStyle2 = () => {
    return (
      <View style={Style.TextInputViewStyle2}>
        <DSTextInput
          {...(props.value !== undefined && { value: props.value })}
          value={props.value}
          onFocus={() => {
            setFocused(true)
            if (props.onFocus !== undefined) {
              props.onFocus()
            }
          }}
          onBlur={() => {
            setFocused(false)
          }}
          placeholder={focused ? '' : props.placeholder}
          autoCapitalize={props.autoCapitalize}
          autoCorrect={props.autoCorrect}
          editable={props.editable}
          keyboardType={props.keyboardType}
          {...(props.maxLength !== undefined && { maxLength: props.maxLength })}
          multiline={props.multiline}
          numberOfLines={props.numberOfLines}
          {...(props.onChange !== undefined && { onChange: props.onChange })}
          {...(props.onChangeText !== undefined && { onChangeText: props.onChangeText })}
          {...(props.onContentSizeChange !== undefined && { onContentSizeChange: props.onContentSizeChange })}
          {...(props.onEndEditing !== undefined && { onEndEditing: props.onEndEditing })}
          {...(props.onKeyPress !== undefined && { onKeyPress: props.onKeyPress })}
          {...(props.onLayout !== undefined && { onLayout: props.onLayout })}
          {...(props.onScroll !== undefined && { onScroll: props.onScroll })}
          {...(props.onSelectionChange !== undefined && { onSelectionChange: props.onSelectionChange })}
          {...(props.onSubmitEditing !== undefined && { onSubmitEditing: props.onSubmitEditing })}
          placeholderTextColor={props.placeholderTextColor}
          returnKeyType={props.returnKeyType}
          secureTextEntry={(props.type === 'password' && passwordHidden)}
          {...(props.selectionColor !== undefined && { selectionColor: props.selectionColor })}
          selectTextOnFocus={props.selectTextOnFocus}
          style={Style.TextInputStyle2}

        />
        {displayRightIcon()}
      </View>
    )
  }

  const displayLabelStyle1 = () => {
    if (props.label && (focused || props.value)) {
      return (
        <DSLabel
          {...(props.onLabelLayout !== undefined && { onLayout: props.onLabelLayout })}
          {...(props.onLabelLongPress !== undefined && { onLongPress: props.onLabelLongPress })}
          {...(props.onLabelPress !== undefined && { onPress: props.onLabelPress })}
          {...(props.onLabelTextLayout !== undefined && { onTextLayout: props.onLabelTextLayout })}
          selectable={props.selectable}
          style={Style.TextInputLabelStyle1}
        >
          {props.label}
        </DSLabel>
      )
    }
  }

  const displayRightIcon = () => {
    const color = (focused || props.value) ? Colors.primary : Colors.grey1
    if (props.rightIcon || props.type === 'password') {
      return (
        <DSIcon
          onPress={props.onRightIconPress ? props.onRightIconPress : props.type === 'password' ? togglePasswordMode : null}
          {...(props.onRightIconPressIn !== undefined && { onPressIn: props.onRightIconPressIn })}
          {...(props.onRightIconPressOut !== undefined && { onPressOut: props.onRightIconPressOut })}
          {...(props.onRightIconLongPress !== undefined && { onLongPress: props.onRightIconLongPress })}
          style={Style.TextInputRightIcon}
          name={props.rightIcon ? props.rightIcon : 'eye'}
          color={color} size="small"
        />
      )
    }
    return null
  }
  const displayPasswordClosedShape = () => {
    return passwordHidden
      ? null
      : (
        <View style={(focused || props.value) ? Style.passwordEyeClosedFocused : Style.passwordEyeClosed} />
      )
  }

  const togglePasswordMode = () => {
    if (props.type === 'password') {
      setPasswordHidden(!passwordHidden)
    }
  }

  const displayErrorMessageStyle1 = () => {
    if (props.isInvalid) {
      return (
        <DSLabel style={Style.textInputErrorMessageStyle1}>{props.errorMessage}</DSLabel>
      )
    }
  }

  const displayValididyCriterias = () => {
    if (props.valididtyCriterias.length > 0) {
      const display = []
      for (let i = 0; i < props.valididtyCriterias.length; i++) {
        display.push(<DSLabel style={props.valididtyCriterias[i].valid ? Style.TextInputValidityCriteriaValid : Style.TextInputValidityCriteria}>
          {props.valididtyCriterias[i].text}
        </DSLabel>)
      }
      return (
        <View style={Style.textInputValidityCriteriasContainerStyle1}>
          {display}
        </View>
      )
    }
  }

  if (props.styleType === 'style-1') {
    return displayStyle1()
  } else if (props.styleType === 'style-2') {
    return displayStyle2()
  }
  return null
}

TextInput.defaultProps = {
  styleType: 'style-1',
  label: '',
  value: '',
  placeholder: '',
  autoCapitalize: 'sentences', // 'none', 'sentences', 'words', 'characters'
  autoCorrect: false,
  editable: true,
  keyboardType: 'default', // 'default', 'number-pad', 'decimal-pad', 'numeric', 'email-address', 'phone-pad'
  multiline: false,
  numberOfLines: 5,
  placeholderTextColor: Colors.grey1,
  returnKeyType: 'done', // 'done', 'go', 'next', 'search', 'send',
  selectTextOnFocus: false,
  type: 'text', // 'text', 'password',
  isInvalid: false,
  errorMessage: '',
  valididtyCriterias: []
}

TextInput.propTypes = {
  styleType: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  autoCapitalize: PropTypes.string,
  autoCorrect: PropTypes.bool,
  editable: PropTypes.bool,
  keyboardType: PropTypes.string,
  maxLength: PropTypes.number,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  onChange: PropTypes.func,
  onChangeText: PropTypes.func,
  onContentSizeChange: PropTypes.func,
  onEndEditing: PropTypes.func,
  onKeyPress: PropTypes.func,
  onLayout: PropTypes.func,
  onScroll: PropTypes.func,
  onSelectionChange: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  placeholderTextColor: PropTypes.string,
  returnKeyType: PropTypes.string,
  selectionColor: PropTypes.string,
  selectTextOnFocus: PropTypes.bool,
  onLabelLayout: PropTypes.func,
  onLabelLongPress: PropTypes.func,
  onLabelPress: PropTypes.func,
  onLabelTextLayout: PropTypes.func,
  rightIcon: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']),
  onRightIconPress: PropTypes.func,
  onRightIconLongPress: PropTypes.func,
  onRightIconPressIn: PropTypes.func,
  onRightIconPressOut: PropTypes.func,
  isInvalid: PropTypes.bool,
  errorMessage: PropTypes.string,
  valididtyCriterias: PropTypes.array,
  onFocus: PropTypes.func
}

export default TextInput
