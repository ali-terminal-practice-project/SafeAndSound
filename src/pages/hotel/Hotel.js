import React, { Component } from 'react'
import { Text, View, Button, Linking, Image, Dimensions, StyleSheet} from 'react-native'

export default class Hotel extends Component {
  render() {
    const { navigation } = this.props;
    // Linking.openURL('http:baidu.com');
    return (
      <View>
        <View style={style.contain}>
          <View style={style.link}>
            <Image 
              source={require('./image/meituan.png')}
              style={style.image}>
            </Image>
            <Text 
              style={style.linkTitle} 
              onPress={()=>{Linking.openURL('https://minsu.dianping.com/')}}>
              美团
            </Text>
          </View>
          <View style={style.link}>
            <Image 
              source={require('./image/xiecheng.jpg')}
              style={style.image}>
            </Image>
            <Text 
              style={style.linkTitle} 
              onPress={()=>{Linking.openURL('https://www.ctrip.com/')}}>
              携程
            </Text>
          </View>
          <View style={style.link}>
            <Image 
              source={require('./image/qunaer.png')}
              style={style.image}>
            </Image>
            <Text 
              style={style.linkTitle} 
              onPress={()=>{Linking.openURL('https://www.qunar.com/')}}>
              去哪儿
            </Text>
          </View>
          <View style={style.link}>
            <Image 
              source={require('./image/feizhu.png')}
              style={style.image}>
            </Image>
            <Text 
              style={style.linkTitle} 
              onPress={()=>{Linking.openURL('https://www.fliggycn.com/')}}>
              飞猪
            </Text>
          </View>
          <View style={style.linkRed}>
            <Text>没想好酒店？打开小红书看看吧</Text>
            <Button 
              onPress={()=>{Linking.openURL('https://www.xiaohongshu.com/explore')}}
              title="打开小红书"
              color="#DE868F"  
            >
            </Button>
          </View>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  image: {
    height:  0.4*Dimensions.get('window').width,
    width: 0.4*Dimensions.get('window').width
  },
  linkTitle:{
    fontSize: 20,
    textAlign: 'center'
  },
  link:{
    flexDirection: 'column',
    marginVertical: 15
  },
  contain:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 40
  },
  linkRed:{
    marginVertical: 20
  }
})