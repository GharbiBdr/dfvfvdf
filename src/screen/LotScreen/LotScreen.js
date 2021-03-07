import React, { useState, useEffect } from "react"
import { View } from 'react-native'
import { Button, Container, Heading } from '../../designSystem'
import { FlatList } from 'react-native-gesture-handler'
import Style from '../../assets/styles/Style'
import Header from '../../layouts/Header/Header'
import { ElementList, ElementCard } from "../../designSystem"
import { apiGetListLot } from "../../Api/Lot"

const LotScreen = (props) => {
    const [data, setData] = useState([])
    const [GridView, setGridView] = useState(true)
    const [lastLotId, setLastLotId] = useState('')
    useEffect(() => {
        getListLot()
    }, [])
    async function getListLot() {
        const response = await apiGetListLot(lastLotId)
        if (response.statusCode === 200) {
            const list = response.lot.map((element, index) => {
                return { _id: element._id, title: element.contact.firstName + " " + element.contact.lastName, description: element.contact.num }
            })
            setData([...data, ...list])
            if (response.lot.length > 0) {
                setLastLotId(response.lot[response.lot.length - 1]._id)
            }
        }
    }
    const onEndReached = async (e) => {
        await getListLot()
    }
    const ShowGridElementCard = (TextLabelAccueil, data) => {
        return (
            <View style={Style.containerScreenLot}>
                <Heading type={'h2'}> {TextLabelAccueil} </Heading>
                <View style={Style.containerFlatList}>
                    <FlatList
                        key="1"
                        numColumns={2}
                        onEndReachedThreshold={0.8}
                        onEndReached={() => onEndReached()}
                        data={data}
                        columnWrapperStyle={Style.flatListColumnStyle}
                        renderItem={({ item, index }) =>

                            <View style={getPadding(index)}>
                                <ElementCard
                                    key={item._id}
                                    elementCardView={Style.elementCardViewListLot}
                                    id={item._id}
                                    title={item.title}
                                    src={require('./avatar.png')}
                                    description={item.description}
                                    onPressElementCard={() => onPressElement(item._id)} />
                            </View>
                        }
                    />
                </View>
            </View>
        )
    }
    const getPadding = (index) => {
        if (index % 2 == 0) {
            return Style.leftElementCardFlatListViewListLot
        }
        else {
            return Style.rightElementCardFlatListViewListLot
        }
    }
    const ShowListElementCard = (TextLabelAccueil, data) => {
        return (
            <View style={Style.containerScreenLot}>
                <Heading type={'h2'}> {TextLabelAccueil} </Heading>
                <View style={Style.containerFlatList}>
                    <FlatList
                        onEndReachedThreshold={0.8}
                        onEndReached={() => onEndReached()}
                        key="2"
                        data={data}
                        renderItem={({ item }) =>
                            <View style={Style.elementListFlatListViewListLot}>
                                <ElementList
                                    key={item._id}
                                    _id={item._id}
                                    title={item.title}
                                    src={require('./avatar.png')}
                                    description={item.description}
                                    onPressElementList={() => onPressElement(item._id)} />
                            </View>
                        }
                    />
                </View>
            </View>
        )
    }
    const ShowElements = (TextLabelAccueil, data) => {
        if (GridView === true) {
            return ShowGridElementCard(TextLabelAccueil, data)
        } else {
            return ShowListElementCard(TextLabelAccueil, data)
        }
    }
    const onPressElement = (_id) => {
    }
    const handleLeftAction = () => {
    }
    const handleRightAction = () => {
        setGridView(!GridView)
    }
    return (
        <View style={Style.containerScreenLot}>
            <Header
                screenName="Lots"
                leftLabel="Catégories"
                handleLeftAction={handleLeftAction}
                rightIconName={GridView === true ? "menu" : "Rectangle"}
                handleRightAction={handleRightAction}
            />
            <Container>
                <View style={[Style.homeContainer, Style.containerScreenLot]} >
                    <Button theme={'default'} size={'small'} text={'Rechercher'} icon={'search'} center={false} onPress={() => props.navigation.navigate('RechercheScreen')} />
                    {ShowElements('DERNIERS LOTS', data)}
                </View>
            </Container>
        </View>
    )
}
export default LotScreen;
