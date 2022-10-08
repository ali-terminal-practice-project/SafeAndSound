import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Global from './src/Global'
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Index from './src/start'
// alert(3)
Global.params = {
  curCity: '杭州',
  desCity: '成都',
   memo: ''
}
function App() {
  return (
    <NavigationContainer>
      <Index />
    </NavigationContainer>
  );
}

export default App;
