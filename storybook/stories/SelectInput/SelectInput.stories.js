import { action } from '@storybook/addon-actions'
import { text, boolean, select, number, color, array } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import CenterView from '../CenterView'
import { Container, SelectInput } from '../../../src/designSystem/'

const TestSelectInput = (props) => {
  const [selectedValue, setSelectedValue] = React.useState(-1)
  const data = [
    { key: 0, label: 'Red Apples' },
    { key: 1, label: 'Cherries' },
    { key: 2, label: 'Cranberries' },
    { key: 3, label: 'Vegetable' }
  ]

  return (
        <Container>
            <CenterView>
                <SelectInput
                    data={array('valididtyCriterias', data, ',', 'Options')}
                    placeholder={text('placeholder', 'Select', 'Options')}
                    onChange={(e) => {
                      setSelectedValue(e.key)
                      action('onChange')
                    }}
                    label={text('label', 'label', 'Options')}
                    selectedKey={selectedValue}
                    selectableLabel={boolean('selectableLabel', false, 'Options')}
                    isInvalid={boolean('isInvalid', false, 'Options')}
                    errorMessage="this is an error message"
                />
            </CenterView>
        </Container>
  )
}

storiesOf('SelectInput', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('SelectInput', () => (
    <TestSelectInput
        selectedValue={number('selectedValue', -1, {}, 'Options')}
        onChange={text('onChange', 'a callback function', 'Callbacks')}
        onLabelLayout={text('onLabelLayout', 'a callback function', 'Callbacks')}
        onLabelLongPress={text('onLabelLongPress', 'a callback function', 'Callbacks')}
        onLabelPress={text('onLabelPress', 'a callback function', 'Callbacks')}
        onLabelTextLayout={text('onLabelTextLayout', 'a callback function', 'Callbacks')}
    />
  ))
