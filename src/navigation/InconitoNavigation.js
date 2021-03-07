import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LandingPageScreen from '../screen/LandingPageScreen/LandingPageScreen'
import LoginScreen from '../screen/LoginScreen/LoginScreen'
import SignUpScreen from '../screen/SignUpScreen/SignUpScreen'
const MainStack = createStackNavigator()

const InconitoNavigation = () => {
  return (
    <MainStack.Navigator>
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
    </MainStack.Navigator>
  )
}

export default InconitoNavigation
