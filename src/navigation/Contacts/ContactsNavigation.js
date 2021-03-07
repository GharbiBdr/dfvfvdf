import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ContactListView from '../../screen/Contacts/ContactListView'

const ContactsStack = createStackNavigator()

const ContactsNavigation = () => {
    return (
        <ContactsStack.Navigator>
            <ContactsStack.Screen
                name='Contacts List'
                options={{ header: () =>null}}
                component={ContactListView}
            />
            
        </ContactsStack.Navigator>
    )
}

export default ContactsNavigation
