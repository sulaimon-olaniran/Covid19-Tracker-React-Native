import React from 'react'
import { TouchableOpacity } from 'react-native'
import Theme, { createStyle } from 'react-native-theming'



export default MyButton = ({text, action}) =>{
    return (
        <TouchableOpacity onPress={action}>
            <Theme.View style={styles.buttonContainer}>
                <Theme.Text style={styles.buttonText}>{text}</Theme.Text>
            </Theme.View>
        </TouchableOpacity>
    )
}



const styles = createStyle({
   buttonContainer : {
       minWidth : 200,
       height : 50,
       backgroundColor : '@buttonColor',
       alignItems : 'center',
       justifyContent : 'center',
       borderRadius : 50,
       borderWidth : 2,
        borderColor : '@borderColor',
       // backgroundColor : '@backgroundColor',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 7,
   },

   buttonText : {
       fontSize : 18,
       textTransform : 'uppercase',
       color : '@buttonText'
   }
})