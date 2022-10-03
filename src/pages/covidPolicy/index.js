import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class index extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View>
        <Text> 核酸检测 </Text>
        <Button
          title="返回主菜单"
          onPress={() => navigation.navigate('Menu')}
        />


      </View>
    )
  }
}
