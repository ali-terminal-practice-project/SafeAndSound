import React, { Component } from 'react'
import { Text, View, Linking, Image, StyleSheet, Dimensions} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
export default class Index extends Component {
  render() {
    // const { navigation } = this.props
    return (
      <View>
        <Image 
          source={require('./image/earth.jpg')}
          style={style.image}>
        </Image>
        <Text style={style.text1}>
          今日你想
        </Text>
        <Text style={style.text2}>
          到哪里
        </Text>
        <View style={style.linkTrain}>
          <Ionicons name="train" style={style.iconStyle}></Ionicons>  
          <View 
            style={style.linkTitle} 
            onPress={()=>{Linking.openURL('https://www.12306.cn/index/')}}>
            <Text>12306在线订票</Text>
            <Ionicons name="chevron-forward-outline"></Ionicons>
            <Ionicons name="chevron-forward-outline"></Ionicons>
            <Ionicons name="chevron-forward-outline"></Ionicons>
          </View>
        </View>
        <View style={style.linkTrain}>
          <Ionicons name="airplane" style={style.iconStyle}></Ionicons>  
          <View 
            style={style.linkTitle} 
            onPress={()=>{Linking.openURL('https://www.qunar.com/')}}>
            <Text>去哪儿订票</Text>
            <Ionicons name="chevron-forward-outline"></Ionicons>
            <Ionicons name="chevron-forward-outline"></Ionicons>
            <Ionicons name="chevron-forward-outline"></Ionicons>
          </View>
        </View>
        <View style={style.linkTrain}>
          <Ionicons name="airplane" style={style.iconStyle}></Ionicons>  
          <View 
            style={style.linkTitle} 
            onPress={()=>{Linking.openURL('https://www.ctrip.com/')}}>
            <Text>携程订票</Text>
            <Ionicons name="chevron-forward-outline"></Ionicons>
            <Ionicons name="chevron-forward-outline"></Ionicons>
            <Ionicons name="chevron-forward-outline"></Ionicons>
          </View>
        </View>
      </View>
    )
  }
}
const style = StyleSheet.create({
  text1:{
    fontSize: 25,
    marginLeft: 20,
    marginVertical: 5
  },
  text2:{
     fontSize: 30,
     marginLeft:20,
     marginVertical: 5
  },
  linkTrain:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15
  },
  linkTitle:{
    flexDirection: 'row',
    alignItems: 'center',
    width: 0.5*Dimensions.get('window').width,
    height: 50,
    backgroundColor: "#54BCBD",
    borderRadius: 10,
    textAlign: 'center',
    lineHeight: 40,
    paddingLeft: 20
  },
  iconStyle:{
    fontSize: 50, 
    marginRight: 10
  }
})