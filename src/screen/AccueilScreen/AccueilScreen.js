import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'

import { Button, Container, Heading, ElementCard, Label, TextInput } from '../../designSystem'

import { FlatList } from 'react-native-gesture-handler'
import Style from '../../assets/styles/Style'
import Header from '../../layouts/Header/Header'
const AccueilScreen = (props) => {
  const dataLotsSaisie = [
    { id: '', title: 'JOHEN PAUL', avatarName: 'JP', size: 'medium', description: '02136', check: false, imageType: 'image' },
    { id: '', title: 'JOHEN PAUL', avatarName: 'JP', size: 'medium', description: '02136', check: false, imageType: 'image' },
    { id: '', title: 'JOHEN PAUL', avatarName: 'JP', size: 'medium', description: '02136', check: true, imageType: 'image' },
    { id: '', title: 'JOHEN PAUL', avatarName: 'JP', size: 'medium', description: '02136', check: false, imageType: 'image' },
    { id: '', title: 'JOHEN PAUL', avatarName: 'JP', size: 'medium', description: '02136', check: false, imageType: 'image' },
    { id: '', title: 'JOHEN PAUL', avatarName: 'JP', size: 'medium', description: '02136', check: false, imageType: 'image' }
  ]
  const dataDocument = [
    { id: '', title: 'JOHEN PAUL', avatarName: 'JP', size: 'medium', description: '02136', check: true, imageType: 'avatar' },
    { id: '', title: 'JOHEN PAUL', avatarName: 'JP', size: 'medium', description: '02136', check: true, imageType: 'avatar' },
    { id: '', title: 'JOHEN PAUL', avatarName: 'JP', size: 'medium', description: '02136', check: true, imageType: 'avatar' },
    { id: '', title: 'JOHEN PAUL', avatarName: 'JP', size: 'medium', description: '02136', check: false, imageType: 'avatar' },
    { id: '', title: 'JOHEN PAUL', avatarName: 'JP', size: 'medium', description: '02136', check: false, imageType: 'avatar' },
    { id: '', title: 'JOHEN PAUL', avatarName: 'JP', size: 'medium', description: '02136', check: false, imageType: 'avatar' }
  ]
  const dataLesPlusConsultes = [
    { id: '', title: 'JOHEN PAUL', avatarName: 'JP', size: 'medium', description: '02136', check: false, imageType: 'image' },
    { id: '', title: 'JOHEN PAUL', avatarName: 'JP', size: 'medium', description: '02136', check: false, imageType: 'image' },
    { id: '', title: 'JOHEN PAUL', avatarName: 'JP', size: 'medium', description: '02136', check: false, imageType: 'image' },
    { id: '', title: 'JOHEN PAUL', avatarName: 'JP', size: 'medium', description: '02136', check: false, imageType: 'image' },
    { id: '', title: 'JOHEN PAUL', avatarName: 'JP', size: 'medium', description: '02136', check: false, imageType: 'image' },
    { id: '', title: 'JOHEN PAUL', avatarName: 'JP', size: 'medium', description: '02136', check: false, imageType: 'image' }
  ]
  const ShowElementCardWithHorizontalScroll = (TextLabelAccueil, data) => {
    return (
      <View >
        <Heading type={'h2'}> {TextLabelAccueil} </Heading>
        <FlatList
          horizontal
          data={data}
          renderItem={({ item }) =>
            <View style={Style.elementCardFlatListView}>
              <ElementCard
                id={item.id}
                title={item.title}
                src={require('../ResultatRechercheScreen/avatar.png')}
                avatarName={item.avatarName}
                size={item.size}
                description={item.description}
                check={item.check}
                imageType={item.imageType}
                onPressElementCard={''}/>
            </View>
          }
        />
      </View>
    )
  }
  return (

    <ScrollView contentContainerStyle={Style.homeContainer} >
      <Header screenName="Accueil" />
      <Container>
        <Button theme={'default'} size={'small'} text={'Rechercher'} icon={'search'} center={false} onPress={() => props.navigation.navigate('RechercheScreen')} />
        {ShowElementCardWithHorizontalScroll('DERNIER LOTS SAISIS', dataLotsSaisie)}
        {ShowElementCardWithHorizontalScroll('DERNIER DOCUMENTS CRÉÉS', dataDocument)}
        {ShowElementCardWithHorizontalScroll('LES + CONSULTÉS', dataLesPlusConsultes)}
      </Container>
    </ScrollView>

  )
}

export default AccueilScreen
