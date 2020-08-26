import React, { useEffect, useState } from 'react'
import { Modal, Image } from 'react-native'
import Theme, { createStyle, createThemedComponent } from 'react-native-theming'
import axios from 'axios'
import { country_names as countries } from '../../components/CountryNames'
import ListItem from '../../components/ListItem'


import { GlobalStyles } from '../../styles/GlobalStyles'
import MyButton from '../../components/MyButton'


const MyImage = createThemedComponent(Image)
export default CountryStatsModal = ({ country, visibility, setModalVisible }) => {
    const [countryData, setCountryData] = useState()
    const [fetcingData, setfetchingDAta] = useState(true)
    //console.log(countries[0].name)
    useEffect(() => {
        axios({
            "method": "GET",
            "url": "https://covid-193.p.rapidapi.com/statistics",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "c504a5222fmshe2a3d13657c6e0ep1018ccjsn4c854ec80138",
                "useQueryString": true
            }, "params": {
                "country": country
            }
        })
            .then((response) => {
                //console.log(response.data.response)
                setCountryData(response.data.response)
                setfetchingDAta(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    let countryAbbr = null

    countryData && countryData.length > 0 && countries.forEach((item) => {
        if (item.name.toLowerCase() === countryData[0].country.toLowerCase()) {
            countryAbbr = item.code
        }
    })

    if(fetcingData) return <Theme.View style={styles.container}><Theme.Text>Loading</Theme.Text></Theme.View> 
    return (
        <Modal
            visible={visibility}
            animationType='slide'
        //transparent={true}
        >
            {
                countryData && countryData.length > 0
                 ?
                <Theme.View style={styles.container}>

                    <Theme.View style={styles.countryInfoContainer}>
                            <MyImage
                                source={{ uri: `https://www.countryflags.io/${countryAbbr}/flat/64.png` }}
                                style={styles.image}
                                resizeMode = 'cover'
                                
                            />
                        

                        <Theme.Text style={GlobalStyles.headerText}>
                            {countryData[0].country}, {countryData[0].continent}.
                        </Theme.Text>

                        <Theme.Text style={GlobalStyles.text}>
                            {countryData[0].country} has a population of {countryData[0].population}.
                        </Theme.Text>

                    </Theme.View>

                    <Theme.View>
                        <ListItem
                            titleText='Total Tests'
                            contentText={countryData[0].tests.total}
                            bgcolor='purple'
                        />

                        <Theme.Text style={[GlobalStyles.text, styles.text]}>
                            Ratio of Tested people is {countryData[0].tests['1M_pop']} per 1 million people.
                        </Theme.Text>

                        <ListItem
                            titleText='Active Cases'
                            contentText={countryData[0].cases.active}
                            bgcolor='orange'
                        />
                        <ListItem
                            titleText='New Cases'
                            contentText={countryData[0].cases.new}
                            bgcolor='orange'
                        />
                        <ListItem
                            titleText='Critical Cases'
                            contentText={countryData[0].cases.critical}
                            bgcolor='orange'
                        />

                        <ListItem
                            titleText='Total Cases'
                            contentText={countryData[0].cases.total}
                            bgcolor='orange'
                        />
                        <Theme.Text style={[GlobalStyles.text, styles.text]}>
                            Ratio of Cases is {countryData[0].cases['1M_pop']} per 1 million people.
                        </Theme.Text>

                        <ListItem
                            titleText='Total Deaths'
                            contentText={countryData[0].deaths.total}
                            bgcolor='red'
                        />

                        <ListItem
                            titleText='New Deaths'
                            contentText={countryData[0].deaths.new}
                            bgcolor='red'
                        />

                        <Theme.Text style={[GlobalStyles.text, styles.text]}>
                            Ratio of Deaths is {countryData[0].deaths['1M_pop']} per 1 million people.
                        </Theme.Text>
                        <ListItem
                            titleText='Recorvered'
                            contentText={countryData[0].cases.recovered}
                            bgcolor='green'
                        />

                        <Theme.Text style={[GlobalStyles.text, styles.text]}>
                            This statistics is provided as at {countryData[0].day}
                        </Theme.Text>
                    </Theme.View>

                    <MyButton text='Go Back' action={() => setModalVisible(false)} />
                </Theme.View>
                :
                <Theme.View style={[styles.container, {justifyContent : 'center'}]}>
                    <Theme.Text style={GlobalStyles.headerText}>No DATA FOUND</Theme.Text>
                    <MyButton text='Go Back' action={() => setModalVisible(false)} />
                </Theme.View>
            }

        </Modal>
    )
}


const styles = createStyle({
    container: {
        backgroundColor: '@backgroundColor',
        alignItems: 'center',
        flex: 1,
    },

    countryInfoContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 15,
    },

   
    image: {
        width: 140,
        height: 140,
        borderRadius: 50,
      
    },

    text: {
        marginBottom: 20,
        marginTop: 5,
        fontSize: 15,
        fontWeight: 'bold'
    }


})