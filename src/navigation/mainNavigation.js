import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BottomNavigation from './BottomNavigation'
import OffresScreen from '../screen/OffresScreen/OffresScreen'
import CgvScreen from '../screen/CgvScreen/CgvScreen'
import AddContacts from '../screen/Contacts/AddContacts'
import AddLotsScreen from '../screen/Lots/AddLotsScreen'
import RechercheScreen from '../screen/RechercheScreen/RechercheScreen'
import { useSelector } from 'react-redux'
import ResultatRechercheScreen from '../screen/ResultatRechercheScreen/ResultatRechercheScreen'
import PayementScreen from '../screen/PayementScreen/PayementScreen'
import LotScreen from '../screen/LotScreen/LotScreen'
import LandingPageScreen from './../screen/LandingPageScreen/LandingPageScreen'
import LoginScreen from './../screen/LoginScreen/LoginScreen'
import SignUpScreen from './../screen/SignUpScreen/SignUpScreen'
const MainStack = createStackNavigator()

const MainNavigation = () => {
  const [authentification, setAuthentification] = useState(false)
  const auth = useSelector(state => state.AuthReducer)
  const verification = () => {
    if (auth.refreshToken === null) {
      return (false)
    } else if (!auth.payment) {
      return (false)
    } else if (new Date(auth.expireDate) < new Date()) {
      return (false)
    } else {
      return (true)
    }
  }
  useEffect(() => {
    setAuthentification(verification())
  }, [useSelector(state => state.AuthReducer)])

  return (
    <MainStack.Navigator>
      
      { !authentification

        ? <>
          <MainStack.Screen
            name='LandingPageScreen'
            options={{ header: () => null }}
            component={LandingPageScreen}
          />
          <MainStack.Screen
            name='LoginScreen'
            options={{ header: () => null }}
            component={LoginScreen}
          />
          <MainStack.Screen
            name='SignUpScreen'
            options={{ header: () => null }}
            component={SignUpScreen}
          />
        </>
        : <MainStack.Screen
          name='Home'
          options={{ header: () => null }}
          children={BottomNavigation}
        />
      }
      <MainStack.Screen
        name='OffresScreen'
        options={{ header: () => null }}
        component={OffresScreen}
      />
      <MainStack.Screen
        name='PayementScreen'
        options={{ header: () => null }}
        component={PayementScreen}
      />
      <MainStack.Screen
        name='RechercheScreen'
        options={{ header: () => null }}
        component={RechercheScreen}
      />
      <MainStack.Screen
        name='CgvScreen'
        options={{ header: () => null }}
        component={CgvScreen}
      />
      <MainStack.Screen
        name='AddContacts'
        options={{ header: () => null }}
        component={AddContacts}
      />
      <MainStack.Screen
        name='AddLots'
        options={{ header: () => null }}
        component={AddLotsScreen}
      />
      <MainStack.Screen
        name='ResultatRecherche'
        options={{ header: () => null }}
        component={ResultatRechercheScreen}
      />
      <MainStack.Screen
        name='ListLot'
        options={{ header: () => null }}
        component={LotScreen}
      />
    </MainStack.Navigator>
  )
}

export default MainNavigation
