import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Menu extends Component {
    render() {
        const { navigation } = this.props
        return (

            <View>
                <Text> 这是主菜单 </Text>

                <Button
                    title='疫情防控政策'
                    onPress={() => navigation.navigate('Policy')}
                />
                <Button
                    title='购票'
                    onPress={() => navigation.navigate('Ticket')}
                />
                <Button
                    title='核酸检测'
                    onPress={() => navigation.navigate('Detect')}
                />
                <Button
                    title='住宿'
                    onPress={() => navigation.navigate('Hotel')}
                />
                <Button
                    title='出行贴士'
                    onPress={() => navigation.navigate('Tip')}
                />
                <Button
                    title='下载'
                    onPress={() => navigation.navigate('Download')}
                />
                <Button
                    title="退出登录"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        )
    }
}
