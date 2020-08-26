import React from 'react'
import {View, Text, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { themes } from './styles/GlobalStyles'
 

//const MyText = createThemedComponent(Text)
import NavHeader from './components/NavHeader'
import SettingsScreen from './screens/settings/SettingsScreen'
import CountriesScreen from './screens/countries/CountriesScreen'
import HomeScreen from './screens/home/HomeScreen'



export default Application = () =>{
    const Stack = createStackNavigator()
    return(
        <NavigationContainer >
        <Stack.Navigator>

            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={({ navigation }) => ({
                    headerTitle: () => <NavHeader text='COVID19-TRACKER' navigation={navigation} screen='home' />,
                    headerTitleContainerStyle: {
                        width: '100%',
                        height: '100%',
                        left: 0,
                    }
                })}
            />

            <Stack.Screen 
                name="Settings" 
                component={SettingsScreen} 
                options={({ navigation }) => ({
                    headerTitle: () => <NavHeader text='SETTINGS' navigation={navigation} screen='settings' />,
                    headerTitleContainerStyle: {
                        width: '100%',
                        height: '100%',
                        left: 0,
                    }
                })}
            />

            <Stack.Screen 
                name="Countries" 
                component={CountriesScreen} 
                options={({ navigation }) => ({
                    headerTitle: () => <NavHeader text='AFFECTED COUNTRIES' navigation={navigation} screen='countries' />,
                    headerTitleContainerStyle: {
                        width: '100%',
                        height: '100%',
                        left: 0,
                    }
                })}
            />

        </Stack.Navigator>
        <StatusBar translucent={true}  color="white"  />
    </NavigationContainer>
    )
}