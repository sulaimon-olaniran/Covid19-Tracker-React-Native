import React from 'react'
import { Image, StyleSheet } from 'react-native'
import Theme, { createStyle } from 'react-native-theming'
import { GlobalStyles } from '../styles/GlobalStyles'




export default EachItem = ({ item }) => {
    return (
        <Theme.View style={styles.container}>
            <Theme.View style={styles.imageContainer}>
                <Image source={item.imageUrl} resizeMethod='resize' style={styles.image} />
            </Theme.View>
            <Theme.Text style={GlobalStyles.headerText}>{item.headerText}</Theme.Text>
            <Theme.Text style={GlobalStyles.text}>{item.bodyText}</Theme.Text>
        </Theme.View>
    )
}



const styles = createStyle({
    container: {
        width: '100%',
        height: 300,
        marginHorizontal : 40,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor : '@backgroundColor',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginHorizontal : 25,
        paddingHorizontal : 20,
    },

    imageContainer : {
        width : 160,
        height : 160,
        borderRadius : 100,
        overflow : 'hidden'
    },

    image : {
        width: '100%',
        height : '100%',
    }
})

const blah = StyleSheet.create({
    con : {
    
    }
})