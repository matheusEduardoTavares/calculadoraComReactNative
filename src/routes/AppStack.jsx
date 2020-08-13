import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/Home'

const { Navigator, Screen } = createStackNavigator()

function AppStack(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen component={Home} name="Calculadora"/>
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack