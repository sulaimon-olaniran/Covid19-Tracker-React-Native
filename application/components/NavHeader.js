import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import Theme, { createStyle } from 'react-native-theming'
import { GlobalStyles } from '../styles/GlobalStyles'
import { MaterialIcons } from '@expo/vector-icons'



export default NavHeader = ({ screen, text, navigation }) => {
    return (
        <Theme.View style={styles.container}>
            { screen !== 'home' && <MaterialIcons name="arrow-back" size={40} color="orange" onPress={() => navigation.goBack()} />}
            <View style={styles.subContainer}>
                <Image source={require('../screens/assets/covid_header.png')}  style={styles.headerImage}/>
                <Theme.Text style={GlobalStyles.headerText}>{text}</Theme.Text>
            </View>
            {screen === 'home' && <MaterialIcons name="settings" size={30} color="orange" onPress={() => navigation.navigate('Settings')} />}
        </Theme.View>
    )
}


const styles = createStyle({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '@headerBackground',
        paddingHorizontal : 10,
    },

    subContainer : {
      flexDirection : 'row',
      alignItems : 'center',
      justifyContent : 'flex-start',
      width : '70%'
    },

    headerImage : {
        width : 40,
        height : 40,
        marginRight : 4,
    },

})
