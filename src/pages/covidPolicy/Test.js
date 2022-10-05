import React, { Component } from 'react'
import {
  Text, View, Button, FlatList, StyleSheet, TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import citys from './city.json'
import Picker from 'react-native-picker';
import area from './area.json'
export default class Policy extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this._createAreaData(),               // 用于存放所有的城市数据
      user: 'a',
      pickedFrom: '出发城市选择2',
      pickedTo: '目的城市'
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



  showCity = () => {
    console.log(this.state.data)
    // console.log(this.pickedFrom)
    alert(this.state.pickedFrom)
  }
  showCity2 = () => {
    console.log(this.state.data)
    // console.log(this.pickedFrom)
    alert(this.state.pickedTo)
  }


  render() {
    const { navigation } = this.props
    return (
      <View>
        <Text> 疫情防控政策 </Text>



        <TouchableOpacity style={{ marginTop: 10, marginLeft: 20 }} onPress={this._showAreaPicker.bind(this)}>
          <Text>{this.state.pickedFrom}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 10, marginLeft: 20 }} onPress={this._showAreaPicker2.bind(this)}>
          <Text>{this.state.pickedTo}</Text>
        </TouchableOpacity>

        <TextInput
          placeholder="test picker with input"
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 10,
            padding: 5
          }}
        />
        <Button
          title='查询疫情出入政策'
          onPress={() => this.showCity2()}
        />
        <Button
          title="返回主菜单"
          onPress={() => navigation.navigate('Menu')}
        />


      </View>
    )
  }
}

const style = StyleSheet.create({
  label: {
    fontSize: 14,
    color: '#333333'
  },
  text: {
    fontSize: 14,
    alignItems: 'center',
    color: 'red'
  }

})