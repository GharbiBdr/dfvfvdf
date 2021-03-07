import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SplashScreen from '../layouts/spalshScreen/splashScreen'
import BottomNavComponent from './BottomNavigationComponent/BottomNavComponent'
import ContactsNavigation from './Contacts/ContactsNavigation'
import AccueilScreen from '../screen/AccueilScreen/AccueilScreen'
import EditLots from '../screen/Lots/EditLotsScreen'
import LotScreen from '../screen/LotScreen/LotScreen'

const BottomTabNavigation = createBottomTabNavigator()

const BottomNavigation = () => {
  return (
    <BottomTabNavigation.Navigator tabBar={props => <BottomNavComponent {...props} />}>
      <BottomTabNavigation.Screen name="Home" component={AccueilScreen} />
      <BottomTabNavigation.Screen name="Contacts" children={ContactsNavigation} />
      <BottomTabNavigation.Screen name="Lots" component={LotScreen} />
      <BottomTabNavigation.Screen name="Documents" component={SplashScreen} />
      <BottomTabNavigation.Screen name="Profil" component={EditLots} />
    </BottomTabNavigation.Navigator>
  )
}

export default BottomNavigation
