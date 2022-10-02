import * as React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeComponent from './components/HomeComponent'

function HomeScreen () {
  return (
    <View style={{ backgroundColor: '#ffff', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <HomeComponent />
    </View>
  )
}

function SettingsScreen () {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>暂无历史记录...</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Query" component={HomeScreen} options={{
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Tab.Screen name="History" component={SettingsScreen} options={{
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}