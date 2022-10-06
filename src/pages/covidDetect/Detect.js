import { BottomSheetAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets'
import React, { Component } from 'react'
import { Text, View, Button, TextInput, StyleSheet, Dimensions,Alert } from 'react-native'

export default class index extends Component {
  constructor() {
    super()

    this.state = {
      city: ''
    }
  }

  doQuerry = () => {
    let key =""
    let location =""
    const url = ``
    fetch(url, {
      method: 'GET'
    }).then(res => res.json())
    .then((res) => {
      console.log(res)
      Alert.alert('成功', '请求成功')
    }).catch((err) => {
      Alert.alert('报错', JSON.stringifly(err))
    })
  }

  doNavigation1 = () => {

  }

  doNavigation2 = () => {

  }

  scanQRCode = () => {
    
  }
  

  render() {
    const { navigation } = this.props

    return (
      <View style={[StyleSheet.container]}>
        <View style={[styles.flexRow]}>
          <TextInput
            style={[styles.input]}
            placeholder="请输入想查询的城市"
            value={this.state.city}
            onChangeText={(val) => {
              this.setState({
                city: val
              })
            }}
          />
          <Button style={[styles.input]} title="查询" onPress={this.doQuerry} color= 'rgb(84, 188, 198)'/>
        </View>

        <View style={[styles.btn1]}>
          <Button title="导航至最近核酸检测点" onPress={this.doNavigation1} color= 'rgb(84, 188, 198)'/>
          <Button title="导航至指定核酸检测点" onPress={this.doNavigation2} color= 'rgb(84, 188, 198)'/>
        </View>

        <View style={[styles.btn2]}>
        <Button title="扫码检测" onPress={this.scanQRCode} color= 'rgb(84, 188, 198)'/>
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifContent: 'center'
  },
  input: {
    width: Dimensions.get('window').width -80,
    marginTop: 0,
    marginLeft: 18,
    marginRight: 0,
    borderWidth: 1,
    borderColor: color= 'rgb(84, 188, 198)',
    paddingHorizontal: 5
  },
  flexRow: {
    flexDirection: 'row'
  },
  btn1: {
    margin:10
  },
  btn2: {
    marginRight: 125,
    marginLeft: 125,
    justifyContent: 'center',
    padding: 5,
    height: 100,
    width: 100,
    borderRadius:200,
    backgroundColor: 'rgb(84, 188, 198)'
  }
})