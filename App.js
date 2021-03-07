
import React, { useEffect } from 'react'
import MainNavigation from './src/navigation/mainNavigation'
import Store, { persistor } from './src/Redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native'
import SplashScreen from 'react-native-splash-screen'


const App = () => {
  useEffect(() => {
    if(SplashScreen){
      SplashScreen.hide()
    }
    
  })
  return (

    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <SafeAreaView style={{ flex: 1 }} >
            <MainNavigation />
          </SafeAreaView>
        </NavigationContainer>
      </PersistGate>
    </Provider >

  )
}

export default App
