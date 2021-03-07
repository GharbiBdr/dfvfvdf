import React, { useState } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { Container, ElementCard, Heading, TextInput } from '../../designSystem'
import { FlatList } from 'react-native-gesture-handler'
import Style from '../../assets/styles/Style'

const ResultatRechercheScreen = () => {
  const [password, onChangePassword] = useState('')
  const dataLotsSaisie = [
    // {
    //   id: '',
    //   title: 'JOHEN PAUL',
    //   avatarName: 'JP',
    //   size: 'medium',
    //   description: '02136',
    //   check: false,
    //   imageType: 'avatar'
    // },
    // {
    //   id: '',
    //   title: 'JOHEN PAUL',
    //   avatarName: 'JP',
    //   size: 'medium',
    //   description: '02136',
    //   check: false,
    //   imageType: 'avatar'
    // },
    // {
    //   id: '',
    //   title: 'JOHEN PAUL',
    //   avatarName: 'JP',
    //   size: 'medium',
    //   description: '02136',
    //   check: false,
    //   imageType: 'image'
    // },
    // {
    //   id: '',
    //   title: 'JOHEN PAUL',
    //   avatarName: 'JP',
    //   size: 'medium',
    //   description: '02136',
    //   check: false,
    //   imageType: 'image'
    // },
    // {
    //   id: '',
    //   title: 'JOHEN PAUL',
    //   avatarName: 'JP',
    //   size: 'medium',
    //   description: '02136',
    //   check: false,
    //   imageType: 'image'
    // },
    // {
    //   id: '',
    //   title: 'JOHEN PAUL',
    //   avatarName: 'JP',
    //   size: 'medium',
    //   description: '02136',
    //   check: false,
    //   imageType: 'image'
    // }
  ]
  const dataDocument = [
    {
      id: '',
      title: 'JOHEN PAUL',
      avatarName: 'JP',
      size: 'medium',
      description: '02136',
      check: false,
      imageType: 'image'
    },
    {
      id: '',
      title: 'JOHEN PAUL',
      avatarName: 'JP',
      size: 'medium',
      description: '02136',
      check: false,
      imageType: 'image'
    },
    {
      id: '',
      title: 'JOHEN PAUL',
      avatarName: 'JP',
      size: 'medium',
      description: '02136',
      check: false,
      imageType: 'image'
    },
    {
      id: '',
      title: 'JOHEN PAUL',
      avatarName: 'JP',
      size: 'medium',
      description: '02136',
      check: false,
      imageType: 'image'
    },
    {
      id: '',
      title: 'JOHEN PAUL',
      avatarName: 'JP',
      size: 'medium',
      description: '02136',
      check: false,
      imageType: 'image'
    },
    {
      id: '',
      title: 'JOHEN PAUL',
      avatarName: 'JP',
      size: 'medium',
      description: '02136',
      check: false,
      imageType: 'image'
    }
  ]
  const dataContacts = [
    {
      id: '',
      title: 'JOHEN PAUL',
      avatarName: 'JP',
      image: './avatar1.jpg',
      size: 'medium',
      description: '02136',
      check: false,
      imageType: 'image'
    },
    {
      id: '',
      title: 'JOHEN PAUL',
      avatarName: 'JP',
      image: './avatar1.jpg',
      size: 'medium',
      description: '02136',
      check: false,
      imageType: 'image'
    },
    {
      id: '',
      title: 'JOHEN PAUL',
      avatarName: 'JP',
      image: './avatar1.jpg',
      size: 'medium',
      description: '02136',
      check: false,
      imageType: 'image'
    },
    {
      id: '',
      title: 'JOHEN PAUL',
      avatarName: 'JP',
      image: './avatar1.jpg',
      size: 'medium',
      description: '02136',
      check: false,
      imageType: 'image'
    },
    {
      id: '',
      title: 'JOHEN PAUL',
      avatarName: 'JP',
      image: './avatar1.jpg',
      size: 'medium',
      description: '02136',
      check: false,
      imageType: 'image'
    },
    {
      id: '',
      title: 'JOHEN PAUL',
      avatarName: 'JP',
      image: './avatar1.jpg',
      size: 'medium',
      description: '02136',
      check: false,
      imageType: 'image'
    }
  ]
  const TestData = (data) => {
    if (data.length > 0) {
      return (
        <View style={Style.elementCardFlatListView}>
          <FlatList
            horizontal
            data={data}
            renderItem={({ item }) =>
              <ElementCard id={item.id} title={item.title} src={require('./avatar1.jpg')} avatarName={item.avatarName}
                size={item.size}
                description={item.description} check={item.check} imageType={item.imageType}
                onPressElementCard={''}/>}
          />
        </View>
      )
    } else {
      switch (data) {
        case dataContacts :
          return (<Text style={Style.TextAucunElementResultatRecherche}>
            Oups...aucun contact ne correspond à votre recherche. Merci de modifier vos critères de recherche.
          </Text>)
        case dataLotsSaisie :
          return (<Text style={Style.TextAucunElementResultatRecherche}>
            Oups...aucun lots ne correspond à votre recherche. Merci de modifier vos critères de
            recherche.
          </Text>)
        case dataDocument :
          return (<Text style={Style.TextAucunElementResultatRecherche}>
            Oups...aucun document ne correspond à votre recherche. Merci de modifier vos critères de recherche.
          </Text>)
      }
    }
  }
  const ShowElementCardWithHorizontalScroll = (TextLabelAccueil, data) => {
    return (
      <View>
        <Heading type={'h2'}> {TextLabelAccueil} </Heading>
        {TestData(data)}
      </View>
    )
  }
  return (

    <Container contentContainerStyle={Style.homeContainer}>
      <ScrollView>
        <TextInput
          value={password}
          type='text'
          placeholder="Rechercher"
        />
        {ShowElementCardWithHorizontalScroll('CONTACTS', dataContacts)}
        {ShowElementCardWithHorizontalScroll('LOTS', dataLotsSaisie)}
        {ShowElementCardWithHorizontalScroll('DOCUMENTS', dataDocument)}
      </ScrollView>
    </Container>

  )
}

export default ResultatRechercheScreen
