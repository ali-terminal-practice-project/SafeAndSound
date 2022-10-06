import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Policy extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View>
        <Text>疫情防控</Text>
        <Button
          title="返回主菜单"
          onPress={() => navigation.navigate('Menu')}
        />
      </View>
    )
  }
}
