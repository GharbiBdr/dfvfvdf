import { action } from '@storybook/addon-actions';
import { text,boolean,select,number,color,array } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import {Image,Container} from "../../../src/designSystem/"

storiesOf('Image', module)
.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
.add("local PNG image",()=>{
    return (
        <Container>
            <Image
                source={require("./default.png")}
                width={text('width (optional)', '100%')}
            />
        </Container>
    )
})
.add("local SVG image",()=>{
    return (
        <Container>
            <Image
                source={require("./default.svg")}
                width={text('width (optional)', '100%')}
            />
        </Container>
    )
})
.add("Online PNG image",()=>{
    return (
        <Container>
            <Image
                source={{uri:"https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image-300x225.png"}}
                width={text('width (optional)', '100%')}
            />
        </Container>
    )
})
.add("Online SVG image",()=>{
    return (
        <Container>
            <Image
                source={{uri:"https://29comwzoq712ml5vj5gf479x-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/default.svg"}}
                width={text('width (optional)', '100%')}
            />
        </Container>
    )
})