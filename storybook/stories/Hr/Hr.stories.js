import { action } from '@storybook/addon-actions';
import { text,boolean,select,number,color,array } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import {Container,Hr} from "../../../src/designSystem/"

const TestSHr=(props)=>{
    return(
        <Container>
            <CenterView>
                <Hr
                    size={select('size',["small","medium","large"],'medium','Options')}
                    theme={select('theme',["default","primary"],'default','Options')}
                    width={select('width (string or number)',["Full",200,100],'Full','Options')}
                />
            </CenterView>
        </Container>
    )
}

storiesOf('Hr', module)
.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
.add('Hr',()=>(
    <TestSHr/>
))