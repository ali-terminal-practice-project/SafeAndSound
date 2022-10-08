import React, { Component } from 'react'
import {
  Text, View, Button, FlatList, StyleSheet, TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import citys from './city.json'
// import Picker from 'react-native-picker';
import {Picker} from '@react-native-picker/picker';
import area from './area.json'
export default class Policy extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this._createAreaData(),               // 用于存放所有的城市数据
      isShow: false,
      pickedFrom: '出发城市选择',
      pickedTo: '目的城市选择',
      policys:{
        outFrom:"此地区暂无特殊疫情防控政策措施",
        inFrom:"此地区暂无特殊疫情防控政策措施",
        outTo:"此地区暂无特殊疫情防控政策措施",
        inTo:"此地区暂无特殊疫情防控政策措施"
      }
    }
    this.source = citys


  }
  _createAreaData() {
    let data = [];
    let len = area.length;
    for (let i = 0; i < len; i++) {
      let city = [];
      for (let j = 0, cityLen = area[i]['city'].length; j < cityLen; j++) {
        let _city = {};
        _city[area[i]['city'][j]['name']] = area[i]['city'][j]['area'];
        city.push(_city);
      }

      let _data = {};
      _data[area[i]['name']] = city;
      data.push(_data);
    }
    return data;
  }
  _showAreaPicker() {
    Picker.init({
      pickerData: this.state.data,
      selectedValue: ['河北', '唐山', '古冶区'],
      onPickerConfirm: pickedValue => {
        console.log('area', pickedValue);
        this.setState({ pickedFrom: pickedValue })
        console.log(1)
      },
      onPickerCancel: pickedValue => {
        console.log('area', pickedValue);
      },
      onPickerSelect: pickedValue => {
        //Picker.select(['山东', '青岛', '黄岛区'])
        console.log('area1', pickedValue);
      }
    });
    Picker.show();
  }
  _showAreaPicker2() {
    Picker.init({
      pickerData: this.state.data,
      selectedValue: ['河北', '唐山', '古冶区'],
      onPickerConfirm: pickedValue => {
        console.log('area', pickedValue);
        this.setState({ pickedTo: pickedValue })

        console.log(2)
      },
      onPickerCancel: pickedValue => {
        console.log('area', pickedValue);
      },
      onPickerSelect: pickedValue => {
        //Picker.select(['山东', '青岛', '黄岛区'])
        console.log('area1', pickedValue);
      }
    });
    Picker.show();
  }
  showResult() {
    // alert(1)
    this.setState({ isShow: true })

  }
  render() {
    const { navigation } = this.props

    let showForm = this.state.isShow ?
      <View>

        <Text style={[style.resultTitle1]}>{this.state.pickedFrom}</Text>
        <Text style={[style.resultTitle2]}>外出政策</Text>
        <Text style={[style.context]}>{this.state.policys.outFrom}</Text>
        
        <Text style={[style.resultTitle2]}>来访政策</Text>
        
        <Text style={[style.context]}>{this.state.policys.inFrom}</Text>
        <Text style={[style.resultTitle1]}>{this.state.pickedTo}</Text>
        <Text style={[style.resultTitle2]}>外出政策</Text>
        <Text style={[style.context]}>{this.state.policys.outTo}</Text>
        <Text style={[style.resultTitle2]}>来访政策</Text>
        <Text style={[style.context]}>{this.state.policys.inTo}</Text>
      </View>
      : null
    // 以上实现隐藏和显示最后查询结果
    return (
      <View>
        <Text style={[style.title]}> 疫情防控政策 </Text>
        <TouchableOpacity style={{ marginTop: 10, marginLeft: 20 }} onPress={this._showAreaPicker.bind(this)}>
          <Text>{this.state.pickedFrom}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 10, marginLeft: 20 }} onPress={this._showAreaPicker2.bind(this)}>
          <Text>{this.state.pickedTo}</Text>
        </TouchableOpacity>
        <Button
          title='查询疫情出入政策'
          onPress={() => this.showResult()}
        />
        <Button
          title="返回主菜单"
          onPress={() => navigation.navigate('Menu')}
        />
        {showForm}

      </View>
    )
  }
}

const style = StyleSheet.create({

  title: {
    fontSize: 30,
    color: 'red'
  },
  resultTitle1: {
    fontSize: 20,
    color: 'blue'
  },
  resultTitle2: {
    fontSize: 15
  },
  context:{
    fontSize: 10,
  }
})