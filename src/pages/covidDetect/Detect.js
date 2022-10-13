import { BottomSheetAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets'
import React, { Component } from 'react'
import { Text, View, Button, TextInput, StyleSheet, Dimensions,Alert } from 'react-native'
import RNEChartsPro from "react-native-echarts-pro";
export default class Detect extends Component {
  constructor(props) {
    super(props)

    this.state = {
      city: ''
    }
    this.mapData = {
      visualMap: {
        show: false,
        left: 'right',
        top: 'center',
        min: 1,
        max: 3,
        calculable: true
      },
      series: [
        {
          type: 'map',
          map: 'world',
          mapType: 'world',
          selectedMode: 'single', //multiple多选
          itemStyle: {
            normal: {
              areaStyle: { color: '#B1D0EC' },
              color: '#B1D0EC',
              borderColor: '#dadfde' //区块的边框颜色
            },
            emphasis: {
              //鼠标hover样式
              label: {
                show: true,
                textStyle: {
                  color: '#000000'
                }
              }
            }
          },
          data: [],
          roam: true
        }
      ],
      toolbox: {
        // 显示策略，可选为：true（显示） | false（隐藏）
        show: true,
        // 布局方式，默认为水平布局，可选为：'horizontal' | 'vertical'
        orient: 'horizontal',
        // 水平安放位置，默认为全图居中，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
        x: 'left',
        // 垂直安放位置，默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
        y: 'bottom',
        // 工具箱背景颜色，默认透明
        backgroundColor: '#1e90ff60',
        // 各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
        itemGap: 10,
        // 工具箱icon大小，单位（px）
        itemSize: 10,
        // 工具箱icon颜色序列，循环使用，同时支持在具体feature内指定color
        color: '#ffffff',
        // 是否显示工具箱文字提示，默认启用
        showTitle: false,
        feature: {
          // 还原，复位原始图表
          restore: {
            show: true,
            title: '还原'
          }
        }
      }
    };
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

        {/* <View style={[styles.btn2]}>
        <Button title="扫码检测" onPress={this.scanQRCode} color= 'rgb(84, 188, 198)'/>
        </View> */}
        
        <View style={{ height: 300 }}>
        <RNEChartsPro height={250} option={this.mapData} />
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