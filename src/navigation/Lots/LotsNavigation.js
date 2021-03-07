import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AddLots from '../../layouts/Lots/AddLots'

const ContactsStack = createStackNavigator()

const ContactsNavigation = () => {
    return (
        <ContactsStack.Navigator>
            <ContactsStack.Screen
                name='Lots'
                options={{ header: () =>null}}
                component={AddLots}
            />
            
        </ContactsStack.Navigator>
    )
}

export default ContactsNavigation
