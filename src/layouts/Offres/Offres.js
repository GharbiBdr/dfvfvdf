import React, { useState } from 'react'
import { TextInput, Heading, P, Container, Icon, Carousel, PricingCard } from '../../designSystem'
import { Dimensions, View, Text, ScrollView } from 'react-native'
import Style from '../../assets/styles/Style'
import PropTypes from 'prop-types'
import Colors from '../../assets/styles/Colors'
import ModalOfferDescription from '../ModalOfferDescription/ModalOfferDescription'
export default function Offres (props) {
  const modalRef = React.createRef()
  const [description, onChangeDescription] = useState('')
  function onPressDisplayMore (value) {
    onChangeDescription(value)
    modalRef.current.open()
  }
  const options = (data) =>{
    let options =[]
    options.push(data.nbrCollaborator + ' collaborateurs')
    options.push(data.storageLimit + ' de stockage')
    if(data.commitment){
      options.push('Engagement d’un an')
    }
    if(data.canceled){
      options.push('Résiliable à tout moment')
    }
    if(data.userSupport){
      options.push('Support utilisateur')
    }
    return(options)
  }
  const renderItem = data => (
    <View
      key={data._id}
      style={Style.offerScrollView}
    >
      <View style={Style.offerCardView} >
        <PricingCard
          period={data.type}
          price={data.price}
          devise={data.unit}
          priceIndicator='Hors taxes / mois'
          options={options(data)}
          displayMoreText='En savoir plus'
          buttonText='Choisir cette offre'
          onPressDisplayMore={() => onPressDisplayMore(data.description)}
          onPressButton={() => props.onPickOffer(data)}
          recommended={data.recommended}
        />
      </View>
    </View>
  )
  return (
    <Container>
      <Icon
        name="go-back"
        size='extra-small'
        color={Colors.black}
        onPress={() => props.goBack()}
      />
      <ScrollView >
        <ModalOfferDescription
          modalRef={modalRef}
          description={description}
        />
        <Heading>
                Choisir une offre
        </Heading>
        <Carousel data={props.dataOffer} renderItem={renderItem} />

      </ScrollView>
    </Container>

  )
}
