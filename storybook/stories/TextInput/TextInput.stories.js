import { action } from '@storybook/addon-actions';
import { text,boolean,select,number,color,array } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import {TextInput,Container} from "../../../src/designSystem/"

const Test1=(props)=>{
    const [value,setValue]=React.useState(props.value)

    return (
        <Container>
            <CenterView>
            <TextInput
                styleType={select('styleType',['style-1','style-2'],'style-1','Options')}
                label={text('label','label','Options')}
                isInvalid={boolean('isInvalid',false,'Options')}
                value={value}
                errorMessage="this is an error message"
                onChangeText={(val)=>{
                    action('onChangeText')
                    setValue(val)
                }}
                onChange={action('onChange')}
                onContentSizeChange={action('onContentSizeChange')}
                onEndEditing={action('onEndEditing')}
                onKeyPress={action('onKeyPress')}
                onLayout={action('onLayout')}
                onScroll={action('onScroll')}
                onLabelLayout={action('onLabelLayout')}
                onLabelLongPress={action('onLabelLongPress')}
                onLabelPress={action('onLabelPress')}
                onSelectionChange={action('onSelectionChange')}
                onSubmitEditing={action('onSubmitEditing')}
                onLabelTextLayout={action('onLabelTextLayout')}
                onRightIconPress={action('onRightIconPress')}
                onRightIconLongPress={action('onRightIconLongPress')}
                onRightIconPressIn={action('onRightIconPressIn')}
                onRightIconPressOut={action('onRightIconPressOut')}
                placeholder={text('placeholder','label','Options')}
                autoCapitalize={select('autoCapitalize',['none','sentences','words','characters'],'sentences','Options')}
                autoCorrect={boolean("autoCorrect",false,'Options')}
                editable={boolean("editable",true,'Options')}
                keyboardType={select("keyboardType",['default','number-pad','decimal-pad','numeric','email-address','phone-pad'],'default','Options')}
                multiline={boolean("multiline",false,'Options')}
                numberOfLines={number('numberOfLines',5,{},'Options')}
                placeholderTextColor={color('placeholderTextColor','#ADB4BB','Options')}
                returnKeyType={select('returnKeyType',['done', 'go', 'next', 'search', 'send'],'done','Options')}
                selectTextOnFocus={boolean("selectTextOnFocus",false,'Options')}
                type={select('type',['text','password'],'text','Options')}
                valididtyCriterias={array('valididtyCriterias',[{text:"> 8 caractères" ,valid:false},{text:"1 majuscule" ,valid:true},{text:"> 1 caractère spécial" ,valid:false}],',','Options')}
                selectionColor={color('selectionColor','#ADB4BB','Options')}
                selectTextOnFocus={boolean("selectTextOnFocus",false,'Options')}
                rightIcon={
                    select(
                        'rightIcon',
                        [
                            '',
                            'arrow-down',
                            'arrow-left',
                            'arrow-right',
                            'arrow-up',
                            'avatar',
                            'camera',
                            'check',
                            'contact',
                            'copy',
                            'download',
                            'eye',
                            'go-back',
                            'home',
                            'list',
                            'lot',
                            'menu',
                            'person',
                            'plus',
                            'Rectangle',
                            'search',
                            'settings',
                            'x',
                        ],
                        '',
                        'Options'
                    )
                }
            />
            </CenterView>
        </Container>
    )
}

storiesOf('TextInput', module)
.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
.add('style 1', () => (
    <Test1
        onChangeText={text('onChangeText', 'a callback function','Callbacks')}
        onChange={text('onChange', 'a callback function','Callbacks')}
        onContentSizeChange={text('onContentSizeChange', 'a callback function','Callbacks')}
        onEndEditing={text('onEndEditing', 'a callback function','Callbacks')}
        onKeyPress={text('onKeyPress', 'a callback function','Callbacks')}
        onLayout={text('onLayout', 'a callback function','Callbacks')}
        onScroll={text('onScroll', 'a callback function','Callbacks')}
        onSelectionChange={text('onSelectionChange', 'a callback function','Callbacks')}
        onSubmitEditing={text('onSubmitEditing', 'a callback function','Callbacks')}
        onLabelLayout={text('onLabelLayout', 'a callback function','Callbacks')}
        onLabelLongPress={text('onLabelLongPress', 'a callback function','Callbacks')}
        onLabelPress={text('onLabelPress', 'a callback function','Callbacks')}
        onLabelTextLayout={text('onLabelTextLayout', 'a callback function','Callbacks')}
        onRightIconPress={text('onRightIconPress', 'a callback function','Callbacks')}
        onRightIconLongPress={text('onRightIconLongPress', 'a callback function','Callbacks')}
        onRightIconPressIn={text('onRightIconPressIn', 'a callback function','Callbacks')}
        onRightIconPressOut={text('onRightIconPressOut', 'a callback function','Callbacks')}
        value={text('value','test','Options')}
    />
  ))