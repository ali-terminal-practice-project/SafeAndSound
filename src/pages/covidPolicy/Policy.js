import React, { Component } from 'react'
import { Text, View, Button, FlatList, StyleSheet } from 'react-native'
import citys from './city.json'


export default class Policy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],               // 用于存放所有的城市数据
      right: [],              // 右边的字母导航数据
      currentLetter: 'A'      // 当前选中的城市
    }
    this.source=citys
  }
  async componentDidMount() {
    const data=citys
    // console.log(this.data);
    console.log("start2");
    let cityInfo = [];
    let right = [];

    // 这里的保证了城市数据和右边的字母导航同步
    data.map((item, index) => {
        cityInfo[index] = { key: item.key, data: item.cities };
        right[index] = item.key;
    });

    this.setState({ data: cityInfo, right: right });
  }

  showCity = () => {
    console.log(this.state.data)
  }

  renderItem = ({ item, index }) => (
    <View style={styles.cityPiece}>
      <Text style={styles.keyText}>{item.key}</Text>
      <View style={styles.cities}>
        {item.data.map(({ city }, index) => (
          <TouchableOpacity key={index} style={styles.cityItem}>
            <Text>{city}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
  render() {
    const { navigation } = this.props
    return (
      <View>
        <Text> 疫情防控政策 </Text>
        <Button
          title='城市查询'
          onPress={() => this.showCity()}
        />
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.key}
        />



        <Button
          title="返回主菜单"
          onPress={() => navigation.navigate('Menu')}
        />


      </View>
    )
  }
}

const styles = StyleSheet.create({
  keyText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cityPiece: {
    marginTop: 6,
    backgroundColor: '#FFF',
    paddingLeft: 21,
    paddingRight: 21,
    paddingTop: 15,
    paddingBottom: 15
  },
  cities: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  cityItem: {
    flex: 0,
    backgroundColor: '#F6F5F5',
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 11,
    paddingBottom: 11,
    borderRadius: 18,
    marginTop: 14,
    marginRight: 10,
  },
  right: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'space-between',
    backgroundColor: '#F6F5F5',
    paddingLeft: 10,
  },
})