import React from 'react';
import { Container, Upload } from "../../../src/designSystem/"
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number, color, array } from '@storybook/addon-knobs';
import CenterView from '../CenterView/index';
import { storiesOf } from '@storybook/react-native';

const Uploader = (props) => {
    return (<Container>
        <CenterView>
            <Upload
                onRightIconPress={action('onRightIconPress')}
                value={value}
                label={text('label', 'label', 'Options')}
                errorMessage="this is an error message"
                placeholder={text('placeholder', 'label', 'Options')}
                multiline={boolean("multiline", false, 'Options')}
                numberOfLines={number('numberOfLines', 5, {}, 'Options')}
                />
        </CenterView>
    </Container>
    )
}

storiesOf('Upload', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add("upload", () => {
        <Uploader
            onRightIconPress={text('onRightIconPress', 'retrun files list upload')}

        />
    })
