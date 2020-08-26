import React, { useContext } from 'react'
import { View, Button, FlatList } from 'react-native'
import Theme, { createStyle, createThemedComponent } from 'react-native-theming'
import Carousel from 'react-native-snap-carousel'
import { GlobalStyles } from '../../styles/GlobalStyles'
import { CovidTipsData } from '../../components/CovidTips'
import EachITem from '../../components/EachItem'
import { DataContext } from '../../context/DataContext'
import ListItem from '../../components/ListItem'
import MyButton from '../../components/MyButton'

const MyFlatList = createThemedComponent(FlatList)

export default HomeScreen = ({ navigation }) => {
    const { worldStats } = useContext(DataContext)
    return (
        <Theme.View style={GlobalStyles.container}>
            <View style={styles.carouselContainer}>
                <Carousel
                    layout='default'
                    data={CovidTipsData}
                    sliderWidth={300}
                    itemWidth={300}
                    sliderHeight={300}
                    renderItem={({ item }) => (
                        <EachITem item={item} />
                    )}

                />
            </View>

            <Theme.View style={styles.detailsContainer}>
                <Theme.Text style={[GlobalStyles.headerText, { marginBottom : 10}]}>World Statistics as at {worldStats && worldStats.statistic_taken_at}</Theme.Text>
                <ListItem
                    titleText='Active Cases'
                    contentText={worldStats && worldStats.active_cases}
                    bgcolor = 'orange'
                />
                <ListItem
                    titleText='New Cases'
                    contentText={worldStats && worldStats.new_cases}
                    bgcolor = 'orange'
                />

                <ListItem
                    titleText='Critical Cases'
                    contentText={worldStats && worldStats.serious_critical}
                    bgcolor = 'orange'
                />

                <ListItem
                    titleText='Total Cases'
                    contentText={worldStats && worldStats.total_cases}
                    bgcolor = 'orange'
                />
                
                <ListItem
                    titleText='New Deaths'
                    contentText={worldStats && worldStats.new_deaths}
                    bgcolor = 'red'
                />

                <ListItem
                    titleText='Total Deaths'
                    contentText={worldStats && worldStats.total_deaths}
                    bgcolor = 'red'
                />

                <ListItem
                    titleText='Total Recovered'
                    contentText={worldStats && worldStats.total_recovered}
                    bgcolor = '#519E8A'
                />

            </Theme.View>

            <View style={styles.buttonContainer}>
                <MyButton text='Affected Countries' action={() => navigation.navigate('Countries')} />
            </View>
        </Theme.View>
    )
}



const styles = createStyle({
    carouselContainer: {
        width: '100%',
        height: 300,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },

    detailsContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical : 15,
    },

    buttonContainer : {
        width : '70%',
        alignSelf : 'center'

    }

})