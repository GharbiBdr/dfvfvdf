import React, { Component } from 'react';
import { View } from 'react-native';
import SectionListContacts from 'react-native-sectionlist-contacts'
import Style from '../../assets/styles/Style';
import { Label, TextInput } from '../../designSystem';
import PropTypes from 'prop-types'
import Colors from '../../assets/styles/Colors';
import { FR } from '../../Lang/Lang';


class ContactList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <View style={Style.searchInputContainerContact}>
                    <TextInput
                        placeholder={FR.rechercheContact}
                        value={this.props.search}
                        onChangeText={(val) => this.props.setSearch(val)}

                    />
                </View>

                <View style={Style.sectionListContainer} >
                    <SectionListContacts
                        ref={s => { this.sectionList = s }}
                        sectionListData={this.props.contacts && this.props.contacts}
                        sectionHeight={50}
                        scrollAnimation={true}
                        initialNumToRender={this.props.contacts.length}
                        showsVerticalScrollIndicator={false}
                        letterTextStyle={{ color: Colors.primary }}
                        renderHeader={(item) => {
                            return (
                                <View style={Style.sectionListHeaderStyle}>
                                    <Label style={Style.sectionListSectionHeader}>{item.key}</Label>
                                </View>)
                        }}
                        renderItem={(item) => {
                            return (
                                <View style={Style.sectionListItemContainer}>
                                    <Label style={Style.sectionListItemFirstName}>{item.name}</Label>
                                    <Label style={Style.sectionListItemLastName}>{item.lastName}</Label>
                                </View>
                            )
                        }}
                        otherAlphabet="#"
                    />
                </View>
            </>
        );
    }
}

ContactList.propTypes = {
    navigation: PropTypes.object,
    setSearch: PropTypes.func,
    search: PropTypes.string,
    contacts: PropTypes.array
}



export default ContactList;