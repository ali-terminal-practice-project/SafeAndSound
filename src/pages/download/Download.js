import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Download extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View>
        <Text> 下载 </Text>
        <Button
          title="返回主菜单"
          onPress={() => navigation.navigate('Menu')}
        />

      </View>
    )
  }
}
