import * as React from 'react';
import { View, Text ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Index from './src/start'
  function App() {
    return (
      <NavigationContainer>
       <Index />
      </NavigationContainer>
    );
  }

export default App;
