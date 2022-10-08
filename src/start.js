import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Menu from './main/index'
import Detect from './pages/covidDetect/Detect'
// import Policy from './pages/covidPolicy/Test'
import Policy from './pages/covidPolicy/Policy'
import Download from './pages/download/Download'
import Hotel from './pages/hotel/Hotel'
import Ticket from './pages/ticket/Ticket'
import Tip from './pages/travelTip/Tip'
import scanQRCode from './pages/covidDetect/scanQRcode'

function HomeScreen({navigation}) {
  return (
    <View style={[styles.container]}>
      {/* <Text style={[styles.text]}>Home Screen</Text> */}
      <Text style={[styles.TheText, styles.TheText1]}>T</Text>
      <Text style={[styles.TheText]}>S</Text>
      <Text style={[styles.TheText]}>&</Text>
      <Text style={[styles.TheText]}>S</Text>

      <Button
        color="transparent"
        title={'Login...'}
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

function LoginScreen({navigation}) {
  return (
    <View style={[styles.container]}>
      <Text>Details Screen</Text>

      <Button title="登录" onPress={() => navigation.navigate('Menu')} />

      <Button title="返回主页" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Stack = createStackNavigator();

export default class index extends Component {
  render() {
    return (
      //   <View>
      //     <Text> textInComponent1 </Text>
      //   </View>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Detect" component={Detect} />
        <Stack.Screen name="Policy" component={Policy} />
        <Stack.Screen name="Download" component={Download} />
        <Stack.Screen name="Hotel" component={Hotel} />
        <Stack.Screen name="Ticket" component={Ticket} />
        <Stack.Screen name="Tip" component={Tip} />
        <Stack.Screen name='scanQRCode' component={scanQRCode}/>
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TheText1: {
    marginBottom: 20,
  },
  TheText: {
    marginBottom: 30,
    fontStyle: 'italic',
    fontSize: 30,
    color: 'rgba(222, 134, 143, 0.53)',
  },
  text: {
    fontSize: 40,
  },
  triangle: {
    position: 'relative',
  },
  triangleLeft: {
    position: 'absolute',
    width: 0,
    height: 0,
    marginRight: 40,
    borderTopWidth: 22,
    borderTopColor: 'transparent',
    borderLeftWidth: 32,
    borderLeftColor: 'rgba(35, 63, 63, 0.85)',
    borderBottomWidth: 22,
    borderBottomColor: 'transparent',
  },
  triangleRight: {
    width: 0,
    height: 0,
    marginLeft: 40,
    marginBottom: 32,
    borderTopWidth: 22,
    borderTopColor: 'transparent',
    borderRightWidth: 32,
    borderRightColor: 'rgba(35, 63, 63, 0.85)',
    borderBottomWidth: 22,
    borderBottomColor: 'transparent',
  },
});
