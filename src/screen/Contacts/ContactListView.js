import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Style from '../../assets/styles/Style';
import ContactList from '../../layouts/Contacts/ContactsList';
import Header from '../../layouts/Header/Header';
import PropTypes from 'prop-types'
import { FR } from '../../Lang/Lang';
import { apiGet } from '../../Api/standardApi';


const ContactListView = (props) => {

    const [contacts, setcontacts] = useState([])
    const [search, setSearch] = useState("")
    useEffect(() => {
        async function getContacts() {
            const response = await apiGet("/contact/getAllContact")
            if(response.statusCode ===200){
                const formatedData = response.data.map(el => { return { ...el, name: el.firstName } })
                setcontacts(formatedData)
            }
          
        }
        getContacts()
    }, [])
    return (
        <View style={Style.sectionListContainer}>
            <Header screenName={FR.contacts} leftLabel={FR.groupes} rightIconName="plus" handleRightAction={() => props.navigation.navigate("AddContacts")} />
            <ContactList
                contacts={contacts}
                search={search}
                setSearch={setSearch} />
        </View>
    );
}

ContactListView.propTypes = {
    navigation: PropTypes.object,
}


export default ContactListView;