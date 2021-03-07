import React, { useState } from 'react'
import { TextInput, Heading, P, Container, Icon, Carousel, PricingCard, Label, ButtonWithSVG } from '../../designSystem'
import { Dimensions, View, Text, ScrollView } from 'react-native'
import Style from '../../assets/styles/Style'
import PropTypes from 'prop-types'
import Colors from '../../assets/styles/Colors'
import LinearGradient from 'react-native-linear-gradient'
import { CreditCardInput, LiteCreditCardInput } from "react-native-vertical-credit-card-input"
import stripe from "tipsi-stripe"
stripe.setOptions({
  publishableKey: 'pk_test_51ILlCXJsMnB5dg1R6Kja0IuyxZdrWgNzzibizitVmlfXDEADGE9gykzheN0E7JoTbqw0wWHidfNQUdyokHtrXqEU00UygcmVm8'
})
export default function Payement (props) {
 const [data, setParams] = useState({
  number: '4242424242424242',
  expMonth: 12,
  expYear: 24,
  cvc: '223',
  name: 'Test User',
  currency: 'usd',
  addressLine1: '123 Test Street',
  addressLine2: 'Apt. 5',
  addressCity: 'Test City',
  addressState: 'Test State',
  addressCountry: 'Test Country',
  addressZip: '55555',
})
   const handleCustomPayPress= async()=> {
    try {
      const params = data 
      const token = await stripe.createTokenWithCard(params)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container>
      <Icon
        name="go-back"
        size='extra-small'
        color={Colors.black}
        onPress={() => props.goBack()}
      />
      <Heading>
        Récapitulatif de votre offre
      </Heading>
      <ScrollView>
      <View >

        <LinearGradient colors={[Colors.secondary, Colors.secondary, Colors.primary]} style={[Style.reacpCard, Style.center]} >
          <Label style={Style.labelCentredLPayement} >Montant à régler</Label>
          <View style={{ flexDirection: 'row' }} >
            <Label style={Style.labelPriceBigPayement} >
                165
                <Label style={Style.labelPriceBigDevisePayement}>
                € (TTC)
                    </Label>
                </Label>
          </View>
          <Label style={Style.labelCentredLPayement} >Annuel</Label>
        </LinearGradient>
        <View style={{marginTop:32}} >
        <ButtonWithSVG
            text="PayPal"
            image={require('../../assets/images/paypal.svg')} 
            icon='arrow-right'
            theme='secondary'
          />
          <View style={{marginTop:22}} >
          <ButtonWithSVG
            text="Carte bancaire"
            image={require('../../assets/images/credit-cards.svg')} 
            icon='arrow-right'
            theme='secondary'
            onPress={()=>handleCustomPayPress()}
          />
          </View>
          </View>
          {/*<CreditCardInput  />*/}
      </View>
      </ScrollView>
    </Container>

  )
}
