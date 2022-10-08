import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet, TextInput} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curdata: {wea_img: 'cloud', date: '2022-10-01', wea: '多云', tem_night: '23', tem_day: '30', win: '', win_speed: '3级', city: '北京'},
      desdata: {wea_img: 'cloud', date: '2022-10-01', wea: '多云', tem_night: '23', tem_day: '30', win: '', win_speed: '3级', city: '北京'},
      lifeComment: {},
      isLoading: true,
      weaIcon: {
        "xue": "snow", 
        "lei": "lightnings",
        "yun":"cloudy",
        "yu":"rain",
        "yin":"cloud",
        "qing":"sun",
        "shachen": "wind",
        "wu": "fog"
      },
      memo:"",
      curCity:'杭州',
      desCity: '成都'
    };
  }
  //  'shachen': ,'wu':,'bingbao',
  componentDidMount() {
    const {curCity, desCity} = this.state;
    // 获取出发地天气
    fetch(`https://v0.yiketianqi.com/free/day?appid=32189289&appsecret=3RdKetVh&unescape=1&city=${curCity}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ curdata: json });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
    //获取目的地天气 
    fetch(`https://v0.yiketianqi.com/free/day?appid=32189289&appsecret=3RdKetVh&unescape=1&city=${desCity}`)
    .then((response) => response.json())
    .then((json) => {
      // localStorage.setItem('desdata', json);
      this.setState({ desdata: json });
    })
    .catch((error) => console.error(error))
    .finally(() => {
      this.setState({ isLoading: false });
    });
    fetch('https://www.tianqiapi.com/life/lifepro?appid=32189289&appsecret=3RdKetVh')
    .then((response) => response.json()) //将响应返回的response中的body(response流)解析成json格式
    .then((json) => {
      this.setState({ lifeComment: json});
    })
    .catch((error) => console.error(error))
    .finally(() => {
      this.setState({ isLoading: false });
    });
  }
  render() {
    // console.log(localStorage.getItem('desdata'));
    const { navigation } = this.props;
    const { curdata,desdata, weaIcon, memo} = this.state;
    const {wea_img:cur_wea_img, date: cur_date, wea: cur_wea, tem_night: cur_tem_night, tem_day: cur_tem_day, win: cur_win, win_speed: cur_win_speed, city: cur_city} = curdata;
    const {wea_img:des_wea_img, date: des_date, wea: des_wea, tem_night: des_tem_night, tem_day: des_tem_day, win: des_win, win_speed: des_win_speed, city: des_city} = desdata;
    return (
      <View style={style.contain}>
        <View style={style.topBar}>
          <Ionicons
            name={"chevron-back-outline"} 
            style={style.topBarIcon} 
            onPress={() => navigation.navigate('Menu')}>
          </Ionicons>
          <Text style={style.topBarText}>出行小贴士</Text>
        </View>
        <View style={style.tipsContain}>
          <View style={[style.itemContain,style.weatherContain]}>
            <View style={style.weather}>
              <Text style={{fontSize: 20}}>{cur_city}</Text>
              <Text style={{fontSize: 15}}>{cur_date}</Text>
              <View style={style.weatherRow}>
                <Fontisto 
                  name={`${weaIcon[cur_wea_img]}`}
                  style={style.weatherIcon}> 
                </Fontisto>
                <Text style={style.weatherText}>{cur_wea}</Text>
              </View>
              <View style={style.weatherRow}>
                <Fontisto 
                  name={"thermometer"}
                  style={style.weatherIcon}> 
                </Fontisto>
                <Text style={style.weatherText}>{`${cur_tem_night}℃/${cur_tem_day}℃`}</Text>
              </View>
              <View style={style.weatherRow}>
                <Fontisto 
                  name={"propeller-3"}
                  style={style.weatherIcon}> 
                </Fontisto>
                <Text style={style.weatherText}>{`${cur_win}/${cur_win_speed}`}</Text>
              </View>
            </View>
            <View style={style.weather}>
              <Text style={{fontSize: 20}}>{des_city}</Text>
              <Text style={{fontSize: 15}}>{des_date}</Text>
              <View style={style.weatherRow}>
                <Fontisto 
                  name={`${weaIcon[des_wea_img]}`}
                  style={style.weatherIcon}> 
                </Fontisto>
                <Text style={style.weatherText}>{des_wea}</Text>
              </View>
              <View style={style.weatherRow}>
                <Fontisto 
                  name={"thermometer"}
                  style={style.weatherIcon}> 
                </Fontisto>
                <Text style={style.weatherText}>{`${des_tem_night}℃/${des_tem_day}℃`}</Text>
              </View>
              <View style={style.weatherRow}>
                <Fontisto 
                  name={"propeller-3"}
                  style={style.weatherIcon}> 
                </Fontisto>
                <Text style={style.weatherText}>{`${des_win}/${des_win_speed}`}</Text>
              </View>
            </View>
          </View>
          <View style={style.itemContain}>
            <Text style={style.comment}>
              今日推荐：{
              }
            </Text>
          </View>
          <View style={style.itemContain}>
            <Text>备忘录：</Text>
            <TextInput 
              style={style.memo}
              value={memo}
              multiline={true}
              onChangeText={((val)=>{this.setState({memo: val})})}
            /> 
          </View>
        </View>
      </View>
    )
  }
}
const style = StyleSheet.create({
  // 顶部栏样式
  topBar:{
    height: 0.15*Dimensions.get('window').height,
    backgroundColor: '#54BCBD',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'flex-end'
  },
  topBarIcon:{
    fontSize: 35,
    color: '#101010',
    textAlign: 'left',
    marginBottom: 0.02*Dimensions.get('window').height,
    marginLeft: 10
  },
  topBarText:{
    color: '#101010',
    fontSize: 25,
    textAlign: 'center',
    marginRight: 0.3*Dimensions.get('window').width,
    marginBottom: 0.02*Dimensions.get('window').height
  },
  // 小贴士样式，三栏的外框
  tipsContain:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },
  itemContain:{ //三栏信息的外框样式
    width: 0.9*Dimensions.get('window').width,
    borderWidth: 1,
    borderColor: '#BBBBBB',
    marginTop: 8
  },
  weatherContain:{//天气栏样式
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  weather:{
    width: 0.44*Dimensions.get('window').width,
    height: 0.44*Dimensions.get('window').width,
    backgroundColor: '#B4F2F2',
    borderRadius: 0.22*Dimensions.get('window').width,
    borderWidth: 1,
    borderColor: '#BBBBBB',
    textAlign: 'center',
    flexDirection:'column',
    alignItems: 'center',
    fontSize: 18,
  },
  weatherRow:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  weatherIcon:{
    fontSize: 20,
    color: '#0F95E4',
    marginTop: 6
  },
  weatherText:{
    fontSize: 18,
    color: '#5D6366',
    marginTop: 6,
    marginLeft: 8
  },
  comment:{

  },
  memo:{
    width: 0.9*Dimensions.get('window').width
  }
})