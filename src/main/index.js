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
