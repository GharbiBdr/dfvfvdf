import { action } from '@storybook/addon-actions';
import { text,boolean,select,number,color,array } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import {PricingCard,Container,Card} from "../../../src/designSystem/"
import { View,Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const TestPricingCard=(props)=>{
    return (
        <Container>
            <PricingCard
                period={text("period",'Mensuel','Options')}
                price={text("price",'15','Options')}
                devise={select('devise',["$","€"],'€','Options')}
                priceIndicator={text("priceIndicator",'Hors taxes / mois','Options')}
                options={array("options",["2 collaborateurs","50 Go de stockage","Résiliable à tout moment","Support utilisateur"],',','Options')}
                displayMoreText={text("displayMoreText",'En savoir plus','Options')}
                buttonText={text("buttonText",'Choisir cette offre','Options')}
                onPressDisplayMore={action('onPressDisplayMore')}
                onPressButton={action('onPressButton')}
            />
        </Container>
        
    )
}

storiesOf('PricingCard', module)
.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
.add("PricingCard",()=>(
    <TestPricingCard
        onPressDisplayMore={text('onPressDisplayMore', 'a callback function','Callbacks')}
        onPressButton={text('onPressButton', 'a callback function','Callbacks')}
    />
))