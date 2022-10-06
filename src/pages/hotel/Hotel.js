import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Hotel extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View>
//        <Text> 住宿 </Text>
        <Button
          style={[styles.button]}
          title="<"
          onPress={() => navigation.navigate('Menu')}
//          广告位宣传图1
        <Image
          imageStyle={ { borderRadius:5}}
          style={[styles.image1]}
          source={require('./images/1.jpg')}
        />
//          美团第三方链接跳转
        <span style={[styles.fbutton]}>
            <a href="http://i.meituan.com/awp/h5/hotel/search/search.html"
               target="_blank"
               rel="noopener noreferrer"
               style={[{color: black},{fontSize:16},{left: 44},{top: 376}]}>
                美团酒店预订
            </a>
        </span>
//          广告位宣传图2
        <Image
          imageStyle={ { borderRadius:5}}
          style={[styles.image1]}
          source={require('./images/2.jpg')}
        />

//          携程第三方链接跳转
        <span style={[styles.fbutton]}>
            <a href="https://www.ctrip.com/?sid=155952&allianceid=4897&ouid=index"
               target="_blank"
               rel="noopener noreferrer"
               style={[{color: black},{fontSize:16},{right: 19},{top: 674}]}>
                携程酒店预订
            </a>
        </span>

//          广告位宣传图3
        <Image
          imageStyle={ { borderRadius:5}}
          style={[styles.image1]}
          source={require('./images/3.jpg')}
        />
//          更多
        <span style={[{color: black},{fontSize:16},{left: 44},{top: 376}]}>
//            <a href="http://i.meituan.com/awp/h5/hotel/search/search.html"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={[{color: black},{fontSize:20},{width: },{height: }]}>
                更多...
//            </a>
        </span>
        <span style={[{color: black},{fontSize:16},{left: 44},{top: 376}]}>
                没想好酒店，打开小红书看看吧
              <Button
                      style={[{color: black},{fontSize:14},{flex：1}]}
                      title="打开小红书"

              />
        </span>


      </View>
    )
  }
}

const styles = StyleSheet.create({
     button: {
            left: 16,
            top: 60,
     }
     Image1: {
       left: 10%,
       height: 19%,
       height: 218,
       width: 302
     },
     Image2: {
       left: 5%,
       top: 57%,
       height: 170,
       width: 160,
     },
     Image3: {
       right: 5%,
       top: 57%,
       height: 170,
       width: 160,
     },

})