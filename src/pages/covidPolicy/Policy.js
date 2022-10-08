import React, { Component } from 'react'
import {
  Text, View, Button, FlatList, StyleSheet, TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import citys from './city.json'
// import Picker from 'react-native-picker'
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
      policys: {
        outFrom: "此地区暂无特殊疫情防控政策措施",
        inFrom: "此地区暂无特殊疫情防控政策措施",
        outTo: "此地区暂无特殊疫情防控政策措施",
        inTo: "此地区暂无特殊疫情防控政策措施"
      },
      table: [],
      fromid: 1,
      toid: 2,
      fromRisk: 1,
      toRisk: 1
    }



  }
  _createAreaData() {
    this.query()
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
        console.log(13)
      },
      onPickerCancel: pickedValue => {
        // console.log('area', pickedValue);
      },
      onPickerSelect: pickedValue => {
        //Picker.select(['山东', '青岛', '黄岛区'])
        // console.log('area1', pickedValue);
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
        // console.log('area', pickedValue);
      },
      onPickerSelect: pickedValue => {
        //Picker.select(['山东', '青岛', '黄岛区'])
        // console.log('area1', pickedValue);
      }
    });
    Picker.show();
  }
  query() {
    fetch('https://v2.alapi.cn/api/springTravel/city', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: 'oCVOjWDFJ2tF99NQ',

      })
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log("asd")
        // this.state.table=responseJson
        console.log("query")
        this.setState({ table: responseJson.data })
        // console.log(this.state.table)
        // return responseJson

      })
      .catch((error) => {
        console.error(error);
      });
  }
  search(arr) {
    if (arr.length != 3) {
      return 0
    }
    let table = this.state.table
    for (let i = 0; i < table.length; i++) {
      if (table[i].province == arr[0]) {
        console.log("find")
        // return table[i].province_id
        for (let j = 0; j < table[i].cities.length; j++) {
          if (table[i].cities[j].city == arr[1]) {
            console.log("find city \t" + table[i].cities[j].city_id)
            return table[i].cities[j].city_id
          }
        }
      }
    }
    return 1
  }
  risk(risk){
    let torisk
    switch (risk) {
      case 0:
      case 1:
        torisk = "低风险"
        break;

      case 2:
        torisk = "中风险"
        break;
      case 3:
        torisk = "高风险"
        break;
      case 4:
        torisk = "部分地区中风险"
        break;
      case 5:
        torisk = "部分地区高风险"
        break;
        case 5:
          torisk = "部分地区中、高风险"
          break;
      default:
        break;
    }
    return torisk
  }
  queryPolicy(fromid, toid) {
    // console.log(fromid)
    // console.log(toid)
    console.log("token='oCVOjWDFJ2tF99NQ'&form=" + fromid + "&to=" + toid)
    fetch('https://v2.alapi.cn/api/springTravel/query', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      // body:"token='oCVOjWDFJ2tF99NQ'&form="+fromid+"&to="+toid
      body: JSON.stringify({
        token: 'oCVOjWDFJ2tF99NQ',
        from: fromid,
        to: toid
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log("policy")
        console.log(responseJson.data)
        // this.setState({ table: responseJson.data })
        let torisk = 0, fromrisk = 0
        let fromIn = "", toIn = ""
       torisk= this.risk(responseJson.data.to_info.risk_level)
       fromrisk=this.risk(responseJson.data.from_info.risk_level)
        if (fromrisk == 3) {
          fromIn = responseJson.data.from_info.high_in_desc
        } else {
          fromIn = responseJson.data.from_info.low_in_desc
        }
        if (torisk == 3) {
          toIn = responseJson.data.to_info.high_in_desc
        } else {
          toIn = responseJson.data.to_info.low_in_desc
        }
        this.setState({
          fromRisk: fromrisk,
          toRisk: torisk,
          policys: {
            outFrom: responseJson.data.from_info.out_desc,
            inFrom: fromIn,
            outTo: responseJson.data.to_info.out_desc,
            inTo: toIn
          }
        })
        console.log(this.state.policys)
      })
      .catch((error) => {
        console.error(error);
      });
  }
  showResult() {
    let from = ['山东', '青岛', '黄岛区']
    let to = ['山东', '青岛', '黄岛区']
    for (let i = 0; i < this.state.pickedFrom.length; i++) {
      from[i] = this.state.pickedFrom[i]
    }
    for (let i = 0; i < this.state.pickedTo.length; i++) {
      to[i] = this.state.pickedTo[i]
    }
    // console.log(from)
    // console.log(to)

    this.setState({
      fromid: this.search(from),
      toid: this.search(to),
    })
    this.queryPolicy(this.search(from), this.search(to))
    console.log(this.state.table)

    this.setState({ isShow: true })
  }
  render() {
    const { navigation } = this.props

    let showForm = this.state.isShow ?
      <View>

        <Text style={[style.resultTitle1]}>{this.state.pickedFrom} {this.state.fromRisk}</Text>
        <Text style={[style.resultTitle2]}>外出政策</Text>
        <Text style={[style.context]}>{this.state.policys.outFrom}</Text>
        <Text style={[style.resultTitle2]}>来访政策</Text>
        <Text style={[style.context]}>{this.state.policys.inFrom}</Text>

        <Text style={[style.resultTitle1]}>{this.state.pickedTo} {this.state.toRisk}</Text>
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
    fontSize: 20,
    color: 'red'
  },
  resultTitle1: {
    fontSize: 10,
    color: 'blue'
  },
  resultTitle2: {
    fontSize: 10
  },
  context: {
    fontSize: 7,
  }
})