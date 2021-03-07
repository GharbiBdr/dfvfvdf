import { action } from '@storybook/addon-actions'
import { text, boolean, select, number, color, array } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import CenterView from '../CenterView'
import { Heading, Container } from '../../../src/designSystem/'

storiesOf('Heading', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Heading', () => (
    <Container>
        <Heading
            type={select('type', ['h1', 'h2'], 'h1', 'Options')}
        >
            {text('children', 'Choisir une offre', 'Options')}
        </Heading>
    </Container>

  ))
