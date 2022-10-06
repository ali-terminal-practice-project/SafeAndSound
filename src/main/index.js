<<<<<<< HEAD
import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

<<<<<<< HEAD
export default class Menu extends Component {
=======
export default class Index extends Component {
>>>>>>> HomeAndTips
    render() {
        const { navigation } = this.props
        return (
            <View style={style.contain}>
            <View style={style.sloganContain}>
            <View style={[style.slogan, style.slogan1]}>
                <Ionicons name={"bicycle"} color={"black"} style={style.sloganIcon}></Ionicons>
                <Text style={style.slogaText}>Travel S&S </Text>
            </View>
            <Text style={[style.slogan, style.slogan2]}>让出行更加便利</Text>
            </View>
            <View style={style.rowContain}>
            <Text style={[style.choice, style.choice1]}
                onPress={() => navigation.navigate('Policy')}>
                <Ionicons name={"heart"} color={"black"} style={[style.homeIcon,style.homeIcon1]}></Ionicons>
                疫情防控
            </Text>
            <Text style={[style.choice, style.choice2]} 
                onPress={() => navigation.navigate('Ticket')}>
                <Ionicons name={"train"} color={"black"} style={style.homeIcon}></Ionicons>
                购票
            </Text>
            </View>
            <View style={style.rowContain}>
            <Text style={[style.choice, style.choice3]}
                onPress={() => navigation.navigate('Detect')}>
                <Ionicons name={"add-circle"} color={"black"} style={style.homeIcon}></Ionicons>
                核酸检测
            </Text>
            <Text style={[style.choice, style.choice4]}
                onPress={() => navigation.navigate('Hotel')}>
                <Ionicons name={"home"} color={"black"} style={style.homeIcon}></Ionicons>
                住宿
            </Text>
            </View>
            <View style={style.rowContain}>
            <Text style={[style.choice, style.choice5]}
                onPress={() => navigation.navigate('Tip')}>
                <Ionicons name={"walk"} color={"black"} style={style.homeIcon}></Ionicons>
                出行贴士
            </Text>
            <Text style={[style.choice, style.choice6]}
                onPress={() => navigation.navigate('Download')}>
                <Ionicons name={"arrow-down-circle"} color={"black"} style={style.homeIcon}></Ionicons>
                下载
            </Text>
            </View>
            <Image
            style={style.pandaImage}
            source={require('./images/panda.jpg')}
            />
        </View> 
        )
    }
}
<<<<<<< HEAD
=======
import React, {Component} from 'react';
import {
  AppRegistry,
  ImageBackground,
  Text,
  View,
  Button,
  StyleSheet,
  Image,
} from 'react-native';
import Swiper from 'react-native-swiper';
export default class index extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={[styles.container]}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            source={require('./img/bg.png')}
            style={styles.image}
          />
        </View>
        <Text style={[styles.TheText]}>Travel S&S </Text>
        <Text style={[styles.TheText1]}>让出行更便利</Text>
        <View style={[styles.line]}></View>
        <View style={[styles.Coronavirus]}>
          <Text
            style={[styles.BottonText]}
            onPress={() => navigation.navigate('Detect')}>
            疫情防控
          </Text>
        </View>

        <View style={[styles.Detect]}>
          <Text
            style={[styles.BottonText]}
            onPress={() => navigation.navigate('Detect')}>
            核酸检测
          </Text>
        </View>
        <View style={[styles.Hotel]}>
          <Text
            style={[styles.BottonText]}
            onPress={() => navigation.navigate('Hotel')}>
            住宿
          </Text>
        </View>

        <View style={[styles.Ticket]}>
          <Text
            style={[styles.BottonText]}
            onPress={() => navigation.navigate('Ticket')}>
            购票
          </Text>
        </View>

        <View style={[styles.Tip]}>
          <Text
            style={[styles.BottonText]}
            onPress={() => navigation.navigate('Tip')}>
            出行贴士
          </Text>
        </View>

        <View style={[styles.Download]}>
          <Text
            style={[styles.BottonText]}
            onPress={() => navigation.navigate('Download')}>
            下载
          </Text>
        </View>
        <Swiper
          style={styles.swiper}
          height={200}
          horizontal={true}
          paginationStyle={{bottom: 10}}
          autoplay={true}
          autoplayTimeout={3}
          showsButtons={true}>
          <Image
            source={require('./img/wallhaven-e7pvmo.jpg')}
            style={styles.img}
          />
          <Image
            source={require('./img/wallhaven-6oe75l.jpg')}
            style={styles.img}
          />
          <Image
            source={require('./img/wallhaven-k7vpr6.jpg')}
            style={styles.img}
          />
        </Swiper>

        <View style={[styles.LogOut]}>
          <Text
            style={[styles.BottonText]}
            onPress={() => navigation.navigate('Home')}>
            退出登录
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TheText: {
    display: 'flex',
    position: 'absolute',
    left: 10,
    top: 0,
    fontSize: 30,
    color: 'black',
    textShadowColor: 'rgba(33, 84, 118, 0.5)',
    textShadowOffset: {width: 8, hegith: 8},
    textShadowRadius: 5,
  },
  TheText1: {
    display: 'flex',
    position: 'absolute',
    left: 60,
    top: 40,
    textShadowColor: 'rgba(33, 84, 118, 0.4)',
    textShadowOffset: {width: 8, hegith: 8},
    textShadowRadius: 3,
  },
  line: {
    position: 'absolute',
    width: 2,
    height: 250,
    left: 20,
    top: 110,
    backgroundColor: 'black',
  },
  Coronavirus: {
    backgroundColor: 'rgba(245, 224, 198, 1)',
    position: 'absolute',
    width: 140,
    height: 60,
    left: 55,
    top: 120,
    borderRadius: 20,
  },
  BottonText: {
    color: 'black',
    alignItems: 'center',
    textAlign: 'center',
    lineHeight: 60,
    fontSize: 15,
  },
  Detect: {
    backgroundColor: 'rgba(245, 224, 198, 1)',
    position: 'absolute',
    width: 140,
    height: 60,
    left: 215,
    top: 120,
    borderRadius: 20,
  },
  Hotel: {
    backgroundColor: 'rgba(101, 171, 171, 0.33)',
    position: 'absolute',
    width: 140,
    height: 60,
    left: 55,
    top: 200,
    borderRadius: 20,
  },
  Ticket: {
    backgroundColor: 'rgba(101, 171, 171, 0.33)',
    position: 'absolute',
    width: 140,
    height: 60,
    left: 215,
    top: 200,
    borderRadius: 20,
  },
  Tip: {
    backgroundColor: 'rgba(17, 16, 17, 0.56)',
    position: 'absolute',
    width: 140,
    height: 60,
    left: 55,
    top: 280,
    borderRadius: 20,
  },
  Download: {
    backgroundColor: 'rgba(17, 16, 17, 0.56)',
    position: 'absolute',
    width: 140,
    height: 60,
    left: 215,
    top: 280,
    borderRadius: 20,
  },

  swiper: {
    display: 'flex',
    top: 420,
    left: 35,
  },
  img: {
    width: 330,
    height: 200,
  },
  image: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  imageContainer: {
    bottom: 0,
    height: '100%',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    width: '100%',
  },
});
>>>>>>> nytDEv
=======

// 声明样式
const style = StyleSheet.create({
    contain: {
        alignItems: 'center',
    },
    // 标语部分的样式
    sloganContain:{//标语的外部容器
        width: 0.8*Dimensions.get('window').width,
        flexDirection: 'column',
        marginBottom: 20,
        marginTop: 20,
        alignItems: 'center'
    },
    slogan:{//标语样式
        color: '#101010',
        fontSize: 25,
        shadowColor: "#222222",
        // shadowOffset: { width: 2, height: 2 },
        // shadowOpacity: 0.2,
        // shadowRadius: 3,
        // elevation: 5,
    },
    slogan1:{ //第1行标语额外的样式
        width: 0.8*Dimensions.get('window').width,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    slogan2:{ //第2行标语额外的样式
        marginLeft:20,
        width: 0.5*Dimensions.get('window').width,
    },
    sloganIcon:{
        color: '#377F7F',
        fontSize: 45,
    },
    slogaText:{
        marginLeft: 5,
        fontSize: 25,
        color: '#101010',
    },
    rowContain: {//首页选项的行
        width: 0.8*Dimensions.get('window').width,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    choice: { //首页的每一个选项
        color: '#101010',
        width: 0.35*Dimensions.get('window').width,
        height: 60,
        lineHeight: 60,
        textAlign: 'center',
        fontSize: 20,
        margin: 10,
        backgroundColor:'#2DCDBC',
        borderRadius: 20
    },
    // 每一个选项的独特颜色设置
    choice1:{
        backgroundColor:'#3BA3E0'
    },
    choice2:{
        backgroundColor:'#2AD5CC'
    },
    choice3:{
        backgroundColor:'#43CF94'
    },
    choice4:{
        backgroundColor:'#C3D52A'
    },
    choice5:{
        backgroundColor:'#2DCDBC'
    },
    choice6:{
        backgroundColor:'#E0BF43'
    },
    homeIcon: { //首页中图标的样式
        fontSize: 25,
        fontWeight: 20,
    },
    homeIcon1:{
        color: '#D34040'
    },
    pandaImage: { //熊猫图片的样式
        height: 200,
        // 获取当前设备window的尺寸
        width: 0.8*Dimensions.get('window').width,
        marginTop: 20
    }
})
>>>>>>> HomeAndTips
