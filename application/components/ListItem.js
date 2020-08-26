import React from 'react'
import Theme, { createStyle } from 'react-native-theming'




export default ListItem = ({ titleText, contentText, bgcolor }) => {
    return (
        <Theme.View style={styles.container}>
            <Theme.View style={[styles.titleContainer, { backgroundColor : bgcolor}]}>
                <Theme.Text style={styles.titleText}>{titleText}</Theme.Text>
            </Theme.View>

            <Theme.View style={styles.contentContainer}>
                <Theme.Text style={styles.contentText}>
                    {contentText}
                </Theme.Text>
            </Theme.View>

        </Theme.View>
    )
}


const styles = createStyle({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius : 50,
        overflow : 'hidden',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '@borderColor',
        height: 35,
        width : '95%',
        marginVertical : 3,
    },

    titleContainer: {
        height: '100%',
        borderRightWidth: 2,
        borderColor: '@borderColor',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        //backgroundColor: 'red'
    },

    contentContainer : {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    titleText: {
        fontSize: 18,
        color: 'white',
        fontWeight: '700'

    },
    contentText: {
        //paddingHorizontal: 10,
        fontSize: 18,
        color : 'white',
        fontWeight: '700'
    }
})