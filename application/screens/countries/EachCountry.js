import React, { useState } from 'react'
import { TouchableOpacity, Modal } from 'react-native'
import Theme, { createStyle } from 'react-native-theming'


export default EachCountry = ({ item, handlePress }) => {
    return (
        <TouchableOpacity onPress={() => handlePress(item.country_name)}>
            <Theme.View style={styles.container}>

                <Theme.View style={styles.titleContainer}>
                    <Theme.Text style={styles.text}>{item.country_name}</Theme.Text>
                </Theme.View>

                <Theme.View style={styles.contentContainer}>
                    <Theme.Text style={styles.text}>{item.cases}</Theme.Text>
                </Theme.View>

            </Theme.View>
        </TouchableOpacity>
    )
}


const styles = createStyle({
    container : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginVertical : 8,
        height : 40,
        borderRadius : 50,
        overflow : 'hidden',
        borderWidth : 2,
        borderColor : '@borderColor',
        backgroundColor : '@backgroundColor',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 7,
    },

    titleContainer : {
        width : '50%',
        borderRightWidth : 2,
        borderColor : '@borderColor',
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : 'orange',
    },

    contentContainer : {
        width : "50%",
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : 'red',
    },

    text : {
        fontSize : 18,
        fontWeight : '700',
        color : 'white',
        textAlign : 'center',
    }


})