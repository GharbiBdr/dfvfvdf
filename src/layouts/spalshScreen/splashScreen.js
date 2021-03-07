import React, { useState } from 'react'

import { View } from 'react-native'
import Header from '../Header/Header'
import AutoComplete from '../../designSystem/Molecules/AutoComplete/AutoComplete'
import { Row, Tag, Container, Label } from '../../designSystem'
import Style from '../../assets/styles/Style'
import { ScrollView } from 'react-native-gesture-handler'

const SplashScreen = () => {
  const data = [{key:1,name:'apple'}]
  const [tags, setTags] = useState([])
  const [textVide, setTextVide] = useState('Sélectionnez vos labels ci-dessous ')
  const handleSelectItemTag = (item) => {
    setTags([...tags, item])
  }

  const deleteTag = (index) => {
    const list = [...tags]
    list.splice(index, 1)
    setTags(list)
  }
  const mapping = () => {
    if (tags.length !== 0) {
      const list = tags.map((item, index) => {
        return <Tag Tagged={true} text={item} Icon={'x'} onPress={() => deleteTag(index)}> </Tag>
      })
      return list
    } else {
      return (<Label style={Style.LabelStyleRecherche}>{textVide}</Label>)
    }
  }
  return (

    <View style={{ flex: 1 }}>
      <Header/>
      <ScrollView>
        <AutoComplete data={data} autoCompleteType={'Text'} handleSelectItem={handleSelectItemTag}></AutoComplete>
        <View>
          <Row col={12} >
            {mapping()}
            {/* <Hr size={'small'} width={'full'} theme={'default'}></Hr> */}
          </Row>
        </View>
      </ScrollView>

      {/* <AutoComplete data={data} autoCompleteType={'Text'} handleSelectItem={(item) => handleSelectItem(item)}></AutoComplete> */}

    </View>

  )
}

export default SplashScreen
