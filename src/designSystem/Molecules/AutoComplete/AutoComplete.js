import React, { } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import { Autocomplete } from '../../ThirdParties/react-native-dropdown-autocomplete'
import Style from '../../../assets/styles/Style'
import Colors from '../../../assets/styles/Colors'

const AutoComplete = props => {

  const displayErrorMessageStyle1 = () => {
    if (props.isInvalid) {
      return (
        <DSLabel style={Style.textInputErrorMessageStyle1}>{props.errorMessage}</DSLabel>
      )
    }
  }

  if (props.autoCompleteType === 'Tag') {
    return (
      <View>
        <Autocomplete
          label={props.label}
          data={props.data}
          valueExtractor={item => item}
          resetOnSelect={true}
          handleSelectItem={(item, id) => props.handleSelectItem(item)}
          inputStyle={[Style.TextAutocompleteStyle]}
          placeholder={'Rechercher'}
          spinnerColor={'transparent'}
          pickerStyle={{
            borderWidth: 0,
            borderColor: 'transparent',
            width: '100%',
            left: 0,
            marginTop: 8
          }}
          scrollStyle={{ borderWidth: 0, color: 'red' }}
          highLightColor={Colors.primary}
          listItemTextStyle={{ color: Colors.grey1, fontSize: 12 }}
          itemPadding={'10'}
        />

      </View>
    )
  } else {
    return (

      <View  >

        <Autocomplete
          label={props.label}
          data={props.data}
          valueExtractor={item => item.name}
          handleSelectItem={(item, id) => props.handleSelectItem(item)}
          inputStyle={[Style.TextInputStyle1, { paddingLeft: -40 }]}
          placeholder={props.placeholder}
          spinnerColor={'transparent'}
          pickerStyle={{
            borderWidth: 0,
            borderColor: 'transparent',
            width: '100%',
            left: 0,
            marginTop: 8,
          }}
          scrollStyle={{ borderWidth: 0, color: 'red' }}
          highLightColor={Colors.primary}
          listItemTextStyle={{ color: Colors.grey1, fontSize: 12 }}
          itemPadding={'10'}
        />
        {displayErrorMessageStyle1()}
      </View>
    )
  }
}

AutoComplete.propTypes = {
  autoCompleteType: PropTypes.oneOf(['Text', 'Tag']),
  onDropdownClose: PropTypes.string,
  onDropdownShow: PropTypes.string,
  handleSelectItem: PropTypes.func
}

export default AutoComplete
