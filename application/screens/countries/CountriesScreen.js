import React, { useContext, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import Theme from 'react-native-theming'
import { DataContext } from '../../context/DataContext'
import EachCountry from './EachCountry'
import { GlobalStyles } from '../../styles/GlobalStyles'
import CountryStatsModal from './StatsModal'


export default CountriesScreen = () => {
    const { affectedCountries } = useContext(DataContext)
    const [selectedCountry, setSelectedCountry] = useState('')
    const [modalVisible, setModalVisible] = useState(false)
    const handlePress = (country) =>{ 
        setModalVisible(true)
        setSelectedCountry(country)
    }

    const sortFunction = (a, b) =>{
        const comparisonA = a.country_name
        const comparisonB = b.country_name
        let comparisonStatus = 0

        if(comparisonA < comparisonB){
            comparisonStatus = -1
        }
        else 
        if( comparisonA > comparisonB){
            comparisonStatus = 1
        }
        return comparisonStatus;
    }

    const sortedData = affectedCountries && affectedCountries.countries_stat.sort(sortFunction)

    return (
        <Theme.View style={[GlobalStyles.container, { paddingHorizontal : 15, paddingTop : 5,}]}>
            { modalVisible && <CountryStatsModal visibility={modalVisible} country={selectedCountry} setModalVisible={setModalVisible} />}
            {
                affectedCountries
                &&
                <FlatList
                    keyExtractor={item => item.country_name}
                    data={sortedData}
                    renderItem={({ item }) => (
                        <EachCountry item={item} handlePress={handlePress} />
                    )}
                    initialNumToRender={15}
                />
            }
        </Theme.View>
    )
}