import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import {
  Button,
  Container,
  Heading,
  Slider,
  TextInput,
  Collapse,
  Row,
  Col, Tag, Label
} from '../../designSystem/index'
import Style from '../../assets/styles/Style'
import AutoComplete from '../../designSystem/Molecules/AutoComplete/AutoComplete'
import { apiGetListGroup } from '../../Api/Groups'
import { apiGetListCategories } from '../../Api/Categories'

const RechercheScreen = (props) => {
  const data = ['apple', 'Personnel étude', 'kiwi', 'Huissiers', 'apps', 'appellll']
  const [tags, setTags] = useState(['Particulier','Experts','client1','civil1','civil3'])
  const [groupList, setGroupList] = useState([])
  const [categories, setCategoriesList] = useState([])
  const [documents, setDocumentsList] = useState([])
  const [textVide, setTextVide] = useState('Sélectionnez vos labels ci-dessous ')
  const [value, setValue] = useState([0, 100])
  const [buttonPressedEtude, setButtonPressedEtude] = useState(true)
  const [buttonPressedClient, setButtonPressedClient] = useState(true)
  const [recherche, SetRecherche] = useState(true)
  const [showLogo, setShowLogo] = useState(false)
  const [collapseButton, setCollapseButton] = useState({
    contact: true,
    lot: true,
    document: true
  })

  useEffect(() => {
    getAllCategory()
    getAllGroup()
  }, [])
  async function getAllGroup () {
    const groups =  await apiGetListGroup()
    if (groups.statusCode === 200) {
      setGroupList(groups.data.map(el => { return { ...el, key: el._id, label: el.name ,subElement:el.subGroup} }))
    }
  }
  async function getAllCategory () {
    const categories = await apiGetListCategories()
    if (categories.statusCode === 200) {
      setCategoriesList(categories.data.map(el => { return { ...el, key: el._id, label: el.name ,subElement:el.category} }))
    }
  }
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
        return <View style={Style.mappingTag}>
          <Tag
            Tagged={true}
            text={item}
            Icon={'x'}
            onPress={() => deleteTag(index)}>
          </Tag>
        </View>
      })
      return list
    } else {
      return (<Label style={Style.LabelStyleRecherche}>{textVide}</Label>)
    }
  }

  const changeButton = (value) => {
    if (value === 'lot') {
      setCollapseButton({
        ...collapseButton,
        lot: !collapseButton.lot
      })
    } else if (value === 'contact') {
      setCollapseButton({
        ...collapseButton,
        contact: !collapseButton.contact
      })
    } else {
      setCollapseButton({
        ...collapseButton,
        document: !collapseButton.document
      })
    }
  }
  const ShowButtonResearch = (nameIcon, titleIcon, buttonPressed) => {
    let stateButton = null
    let button = null

    switch (buttonPressed) {
      case 'Lots' : {
        stateButton = collapseButton.lot
        button = 'lot'
      }
        break
      case 'Contacts' : {
        stateButton = collapseButton.contact
        button = 'contact'
      }
        break
      case 'Documents' : {
        stateButton = collapseButton.document
        button = 'document'
      }
        break
    }
    return (
      <Col col={4}>
        <Button icon={nameIcon} size={'small'} text={titleIcon} theme={stateButton ? 'primary' : 'default'}
                center={true}
                onPress={() => changeButton(button)}
        />
      </Col>
    )
  }
  const ShowCollapseElementLabel = () => {
    return (
      <ScrollView>
        <Collapse TextLabelResearch={'LABELS'}>
          <View >
            <AutoComplete data={data} autoCompleteType={'Tag'}
                          handleSelectItem={handleSelectItemTag} />
            <Row col={12}>
              {mapping()}
            </Row>
            {showCollapseListCategoriesLabels()}
          </View>
        </Collapse>
      </ScrollView>

    )
  }
  const showCollapseSousCategoriesDocument = () => {
    return (
      <Collapse TextLabelResearch={'Document'}>
        <View>
          {showSubElement(documents)}
        </View>
      </Collapse>
    )
  }

  const showElementSubCategorySubGroup = (subElement) => {
    const list = subElement.map(el => {
      const tagvalue = tags.find(element => element === el.name)
        return (
          <View style={Style.mappingTag}>
            <Tag text={el.name} Tagged={tagvalue ? true :false}></Tag>
          </View>
        )
      }
    )
    return list
  }
  const showSubElement =(elementList) => {
    const list = elementList.map(el => {
        return (
          <View >
            <Collapse type='sub' TextLabelResearch={el.label}>
              <View>
                <Row col={12} >
                  {showElementSubCategorySubGroup(el.subElement)}
                </Row>
              </View>
            </Collapse>
          </View>
        )
      }
    )
    return list
  }
  const showCollapseSousCategoriesContact = () => {
    return (
      <Collapse TextLabelResearch={'Contact'}>
        {showSubElement(groupList)}
      </Collapse>
    )
  }
  const showCollapseSousCategoriesLots = () => {
    return (
      <Collapse TextLabelResearch={'Lots'}>
        {showSubElement(categories)}
      </Collapse>
    )
  }

  const showCollapseListCategoriesLabels = () => {
    const  list  =[]
    if(collapseButton.contact){
      list.push( showCollapseSousCategoriesContact())
    }
    if(collapseButton.lot){
      list.push( showCollapseSousCategoriesLots())
    }
    if(collapseButton.document){
      list.push( showCollapseSousCategoriesDocument())
    }
    if(!collapseButton.document&& !collapseButton.lot&&!collapseButton.contact){
      list.push(showCollapseCategoriesLables())
    }
    return list
  }
  const showCollapseCategoriesLables = () => {
    return (
      <View>
        <Collapse TextLabelResearch={'Contacts'}>
          <ScrollView>
            {showSubElement(groupList)}
          </ScrollView>
        </Collapse>
        <Collapse TextLabelResearch={'Lots'}>
          {showSubElement(categories)}
        </Collapse>
        <Collapse TextLabelResearch={'Documents'}>
          <View>
            {showSubElement(documents)}
          </View>
        </Collapse>
      </View>

    )
  }
  const ShowCollapseElementLotEstimation = () => {
    return (
      <View>
        <Collapse TextLabelResearch={'ESTIMATION'}>
          <View>
            <Slider value={value} valueLabelStart={value[0] + ' €'} valueLabelEnd={value[1] + ' €'}
                    onValueChange={handleChange}>
            </Slider>
          </View>
        </Collapse>
        <Collapse TextLabelResearch={'LOCALISATION'}>
          <Row>
            {ShowButtonResearchLocalisation('search', 'Etude', 'Etude')}
            {ShowButtonResearchLocalisation('person', 'Client', 'Client')}
          </Row>
        </Collapse>
        {ShowCollapseElementLabel()}

      </View>
    )
  }
  const ShowListCollapseElementRecherche = () => {
    if (collapseButton.lot) {
      return (
        ShowCollapseElementLotEstimation()
      )
    } else if (!collapseButton.lot && !collapseButton.contact && !collapseButton.document) {
      return (ShowCollapseElementLotEstimation())
    } else {
      return (
        ShowCollapseElementLabel()
      )
    }
  }
  const ShowButtonResearchLocalisation = (nameIcon, titleIcon, buttonPressed) => {
    let stateButton = ''
    let setStateButton = ''
    switch (buttonPressed) {
      case 'Etude' : {
        stateButton = buttonPressedEtude
        setStateButton = setButtonPressedEtude
      }
        break
      case 'Client' : {
        stateButton = buttonPressedClient
        setStateButton = setButtonPressedClient
      }
        break
    }
    return (
      <Col col={6}>
        <Button icon={nameIcon} size={'small'} text={titleIcon} theme={stateButton ? 'default' : 'primary'}
                onPress={() => setStateButton(!stateButton)} center={true}/>
      </Col>
    )
  }
  const handleChange = (val) => {
    setValue(val)
  }
  return (
    <Container contentContainerStyle={Style.rechercheContainer}>
      <ScrollView>
        <TextInput
          placeholder="Rechercher"
          type={'text'}
          value={recherche}
          {...showLogo && { rightIcon: 'x' }}
          onFocus={() => setShowLogo(true)}
          onBlur={() => setShowLogo(false)}
        />
        <Heading type={'h2'}> RECHERCHER DANS : </Heading>
        <Row>
          {ShowButtonResearch('contact', 'Contacts', 'Contacts')}
          {ShowButtonResearch('lot', 'Lots', 'Lots')}
          {ShowButtonResearch('copy', 'Documents', 'Documents')}
        </Row>
        {ShowListCollapseElementRecherche()}
      </ScrollView>
      <Button theme={'primary'} size={'small'} text={'Rechercher'} center={true}
              onPress={() => props.navigation.navigate('ResultatRecherche')}/>
    </Container>
  )
}

export default RechercheScreen
