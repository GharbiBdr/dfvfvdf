import { action } from '@storybook/addon-actions'
import { text, boolean, select, number, color, array } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import CenterView from '../CenterView'
import { Icon, Container } from '../../../src/designSystem/'

storiesOf('Icon', module)
// .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Icons', () => (
    <Container>
        <CenterView>
            <Icon
                name={select(
                  'name',
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
                  'camera',
                  'Options'
                )}
                size={select('size', ['extra-small', 'small', 'medium', 'large', 'extra-large'], 'small', 'Options')}
                color={color('selectionColor', '#ADB4BB', 'Options')}
                onLongPress={action('onChange')}
            />
        </CenterView>
    </Container>
  ), {
    notes: 'A small component'
  })
