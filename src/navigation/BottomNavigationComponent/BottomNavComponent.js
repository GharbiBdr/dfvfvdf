import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity } from 'react-native'
import Style from '../../assets/styles/Style'
import { Image, Hr, Icon } from '../../designSystem'
import MainAddModal from '../../layouts/MainAddModal/MainAddModal'
import Colors from '../../assets/styles/Colors'
import { useSelector, useDispatch } from 'react-redux'

const BottomNavComponent = ({ state, navigation }) => {
  const dispatch = useDispatch()
  const route = useSelector(state => state.route)
  const modalRef = React.createRef()
  const changeScreen = (name, key) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: key
    })
    dispatch({ type: "CHANGE_ROUTE", payload: name })
    if (!event.defaultPrevented) {
      navigation.navigate(name);
    }
  }

  const renderIcon = (iconName, name, i) => {
    return (
      <View style={Style.bottomIconContainer}>
        <Icon name={iconName} size="small" color={route === name ? Colors.primary : Colors.grey4}
          style={route === name && { marginBottom: 4 }}
          onPress={() => changeScreen(name, state.routes[i].key)} />
        {route === name &&
          <Hr size="large"
            theme="primary"
            width={20}
          />}
      </View>
    )
  }
  return (
    <View>
      <View style={Style.bottomNavigationBase}>
        <Image
          width={140}
          source={require('../../assets/images/Base.svg')}
        />
      </View>
      <View style={Style.addButtonStyle}>
        <TouchableOpacity onPress={() => { modalRef.current.open() }} >
          <Image
            width={130}
            source={require('../../assets/images/add.svg')}
          />
        </TouchableOpacity>
      </View>
      <View style={Style.bottomNavigationContainer}>
        <View>
          {renderIcon('home', 'Home', 0)}

        </View>
        <View >
          {renderIcon('contact', 'Contacts', 1)}

        </View>
        <View style={{paddingRight:15}}>
          {renderIcon('lot', 'Lots', 2)}

        </View>
        <View>
          {renderIcon('list', 'Documents', 3)}

        </View>
        <View>
          {renderIcon('person', 'Profil', 4)}

        </View>

      </View>
      <MainAddModal ref={modalRef} />

    </View>)
}

BottomNavComponent.propTypes = {
  navigation: PropTypes.object,
  state: PropTypes.object
}

export default BottomNavComponent
