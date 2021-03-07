import { action } from '@storybook/addon-actions';
import { text,boolean,select,number,color,array } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import {Container,Slider} from "../../../src/designSystem/"
import DSSlider from "../../../src/designSystem/Atoms/DSSlider/DSSlider"

const TestSlider=(props)=>{

    const [value,setValue]=React.useState([0,100])

    const handleChange=(val)=>{
        setValue(val)
    }
    return (
        <Container>
            <CenterView>
                <Slider
                    value={value}
                    onValueChange={handleChange}
                    valueLabelStart={value[0]+" €"}
                    valueLabelEnd={value[1]+" €"}
                />
            </CenterView>
        </Container>
    )
}

storiesOf('Slider', module)
.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
.add("Slider",()=>(
    <TestSlider
        value={text('value','[0,100]','Options')}
        onValueChange={text('onValueChange','callbackfunction','Callbacks')}
        valueLabelStart={text('valueLabelStart','0 €','Options')}
        valueLabelEnd={text('valueLabelStart','100 €','Options')}
        minimumValue={text('minimumValue','0','Options')}
        maximumValue={text('maximumValue','0','Options')}
        disabled={boolean('disabled',false,'Options')}
    />
))