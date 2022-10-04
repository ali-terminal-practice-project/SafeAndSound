import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Menu from './main/index'
import Detect from './pages/covidDetect/Detect'
import Policy from './pages/covidPolicy/Policy'
import Download from './pages/download/Download'
import Hotel from './pages/hotel/Hotel'
import Ticket from './pages/ticket/Ticket'
import Tip from './pages/travelTip/Tip'

function HomeScreen({ navigation }) {
    return (
        <View style={[styles.container]}>
            {/* <Text style={[styles.text]}>Home Screen</Text> */}

            <Button
                title={"进入页面"}
                onPress={() => navigation.navigate('Login')} />


        </View>
    );
}

function LoginScreen({ navigation }) {
    return (
        <View style={[styles.container]}>
            <Text >Details Screen</Text>

            <Button
                title="登录"
                onPress={() => navigation.navigate('Menu')}
            />

            <Button
                title="返回主页"
                onPress={() => navigation.navigate('Home')}
            />

        </View>

    );
}

const Stack = createStackNavigator()



export default class Start extends Component {
    render() {
        return (
            //   <View>
            //     <Text> textInComponent1 </Text>
            //   </View>
            <Stack.Navigator initialRouteName='Home'>
                
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Menu' component={Menu} />
                <Stack.Screen name='Detect' component={Detect} />
                <Stack.Screen name='Policy' component={Policy} />
                <Stack.Screen name='Download' component={Download} />
                <Stack.Screen name='Hotel' component={Hotel} />
                <Stack.Screen name='Ticket' component={Ticket} />
                <Stack.Screen name='Tip' component={Tip} />
            </Stack.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 40
    }
})


