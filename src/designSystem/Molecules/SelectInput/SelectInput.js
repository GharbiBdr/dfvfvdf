import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity } from 'react-native'
import DSSelectInput from '../../Atoms/DSSelectInput/DSSelectInput'
import DSLabel from '../../Atoms/DSLabel/DSLabel'
import Colors from '../../../assets/styles/Colors'
import Style from '../../../assets/styles/Style'
import DSIcon from '../../Atoms/DSIcon/DSIcon'

const SelectInput = (props) => {
  const [visible, setVisible] = React.useState(false)

  const displayLabel = () => {
    if (props.label && (props.selectedKey > -1)) {
      return (
                <DSLabel
                    {...(props.onLabelLayout !== undefined && { onLayout: props.onLabelLayout })}
                    {...(props.onLabelLongPress !== undefined && { onLongPress: props.onLabelLongPress })}
                    {...(props.onLabelPress !== undefined && { onPress: props.onLabelPress })}
                    {...(props.onLabelTextLayout !== undefined && { onTextLayout: props.onLabelTextLayout })}
                    selectable={props.selectableLabel}
                    style={Style.TextInputLabelStyle1}
                >
                    {props.label}
                </DSLabel>
      )
    }
  }

  const displayErrorMessage = () => {
    if (props.isInvalid) {
      return (
                <DSLabel style={Style.textInputErrorMessageStyle1}>{props.errorMessage}</DSLabel>
      )
    }
  }

  return (
        <View style={Style.TextInputViewStyle1}>
            <DSSelectInput
                data={props.data}
                placeholder={props.placeholder}
                onChange={props.onChange}
                selectedKey={props.selectedKey}
                visible={visible}
                onModalOpen={() => setVisible(true)}
                onModalClose={() => setVisible(false)}
            />
            <TouchableOpacity onPress={() => { setVisible(true) }} style={[Style.SelectInputCaret, (props.selectedKey > -1) ? Style.SelectInputCaretSelected : null]} ></TouchableOpacity>
            {displayLabel()}
            {displayErrorMessage()}
        </View>
  )
}

SelectInput.defaultProps = {
  selectableLabel: false,
  isInvalid: false,
  label: '',
  errorMessage: '',
  data: [],
  placeholder: '',
  selectedKey: -1
}

SelectInput.propTypes = {
  onLabelLayout: PropTypes.func,
  onLabelLongPress: PropTypes.func,
  onLabelPress: PropTypes.func,
  onLabelTextLayout: PropTypes.func,
  onChange: PropTypes.func,
  selectableLabel: PropTypes.bool,
  isInvalid: PropTypes.bool,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  data: PropTypes.array,
  placeholder: PropTypes.string,
  selectedKey: PropTypes.number
}

export default SelectInput
