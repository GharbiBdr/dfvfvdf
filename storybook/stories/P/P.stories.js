import { action } from '@storybook/addon-actions';
import { text,boolean,select,number,color,array } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import {Container,P} from "../../../src/designSystem/"

const TestP=(props)=>{
    return(
        <Container>
            <CenterView>
                <P
                textAlign={select("textAlign",["justify","left"],"justify",'Options')}
                >
                    {(text("children","Vous êtes sur le point de créer un compte administrateur pour votre entreprise. Assurez-vous qu’un compte administrateur n’a pas déjà été crée auparavant.","Options"))}
                </P>
            </CenterView>
        </Container>
    )
}

storiesOf('P', module)
.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
.add('P',()=>(
    <TestP/>
))