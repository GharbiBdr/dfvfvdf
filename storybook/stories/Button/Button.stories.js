import { action } from '@storybook/addon-actions'
import { text, boolean, select, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import CenterView from '../CenterView'
import { Button, Container } from '../../../src/designSystem/'

const ButtonStory = (props) => {
  return (
        <Container>
            <Button
                size={select('size (Optional)', ['small', 'normal', 'large'], 'normal', 'Options')}
                theme={select('theme (optional)', ['default', 'primary', 'transparent'], 'default', 'Options')}
                text={text('text', 'Submit', 'Options')}
                disabled={boolean('disabled', false, 'Options')}
                delayLongPress={number('delayLongPress (Optional)', 500, {}, 'Options')}
                icon={
                    select(

                      'icon (Optional)',
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
                        'x'
                      ],
                      '',
                      'Options'
                    )
                }

                onLongPress={action('onLongPress')}
                onPress={action('onPress')}
                onPressIn={action('onPressIn')}
                onPressOut={action('onPressOut')}
            />
        </Container>
  )
}

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('buttons', () => (
    <ButtonStory
    onPress={text('onPress (Optional)', 'a callback function', 'Callbacks')}
    onLongPress={text('onLongPress (Optional)', 'a callback function', 'Callbacks')}
    onPressIn={text('onPressIn (Optional)', 'a callback function', 'Callbacks')}
    onPressOut={text('onPressOut (Optional)', 'a callback function', 'Callbacks')}
    />
  ))
