import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, Image, Button, Dimensions, Navigator, WebView, Linking, AppRegistry } from 'react-native'

export default class Ticket extends Component {
   render() {
      const { navigation } = this.props
      return (
         <View>
            <Text> 购票</Text>
            <Button
               style={[styles.button]}
               title="<"
               onPress={() => navigation.navigate('Menu')}
            />

            <Image
               style={[styles.background]}
               // source={require('./images/1.jpg')}
               source={{uri:"http://176.51.6.120:80/ajia_code/img/404/404_img1.png"}}
            />
            {/* //          文字装饰 */}
            {/* <Text style={[{color: black},{fontSize:20},{width: },{height: }]}> 今日你想 </Text>
           <Text style={[{color: black},{fontSize:28},{width: },{height: }]}> 去哪里 </Text> */}

            <Text > 今日你想 </Text>
            <Text> 去哪里 </Text>
            {/* //          出行地、目的地icon图 */}
            <Image
               style={[styles.icon1]}
               // source={require('./images/2.jpg')}
               source={{uri:"http://176.51.6.120:80/ajia_code/img/404/404_img1.png"}}
            />
            <Image
               style={[styles.icon2]}
               // source={require('./images/3.jpg')}
               source={{uri:"http://176.51.6.120:80/ajia_code/img/404/404_img1.png"}}
            />
            {/* //          出行地输入框 */}
            <TextInput style={[{ color: black }, { fontSize: 20 }, { left: 55 }, { top: 546 }, { borderRadius: 30 }]}
               placeHolder="出行地"
            />
            {/* //         icon */}
            <Image
               style={[styles.icon]}
               // source={require('./images/4.jpg')}
               source={{uri:"http://176.51.6.120:80/ajia_code/img/404/404_img1.png"}}
            />
            {/* //         目的地 */}
            <TextInput style={[{ color: black }, { fontSize: 20 }, { right: 55 }, { top: 546 }]}
               placeHolder="目的地"
            />
            {/* //          点击跳转 */}
            <span style={[styles.fbutton]}>
               <a href="https://www.12306.cn/index/"
                  target="_blank"
                  rel="noopener noreferrer">
                12306在线订票>>>
               </a>
            </span>

         </View>
      )
   }
}

const styles = StyleSheet.create({
   button: {
      left: 16,
      top: 60,
   },


   background: {
      height: 102,
      width: Dimensions.get('window').width,
   },
   fbutton: {
      // width:
      //    height:
      justifyContent: 'center',
       flex: 1
   },
   icon: {
      position: 'absolute',
      
      justifyContent: 'center',
      alignItems: 'center',
   },
   icon1: {
      position: 'absolute',
      // top: 62% 
      // left: 22 %,
   },
   icon2: {
      position: 'absolute'
      // top: 62 %,
      // right: 22 %,
   },

})
