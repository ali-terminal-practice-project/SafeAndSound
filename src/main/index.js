import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
export default class Index extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View style={style.contain}>
            <View style={style.sloganContain}>
            <View style={[style.slogan, style.slogan1]}>
                <Ionicons name={"bicycle"} color={"black"} style={style.sloganIcon}></Ionicons>
                <Text style={style.slogaText}>Travel S&S </Text>
            </View>
            <Text style={[style.slogan, style.slogan2]}>让出行更加便利</Text>
            </View>
            <View style={style.rowContain}>
            <Text style={[style.choice, style.choice1]}
                onPress={() => navigation.navigate('Policy')}>
                <Ionicons name={"heart"} color={"black"} style={[style.homeIcon,style.homeIcon1]}></Ionicons>
                疫情防控
            </Text>
            <Text style={[style.choice, style.choice2]} 
                onPress={() => navigation.navigate('Ticket')}>
                <Ionicons name={"train"} color={"black"} style={style.homeIcon}></Ionicons>
                购票
            </Text>
            </View>
            <View style={style.rowContain}>
            <Text style={[style.choice, style.choice3]}
                onPress={() => navigation.navigate('Detect')}>
                <Ionicons name={"add-circle"} color={"black"} style={style.homeIcon}></Ionicons>
                核酸检测
            </Text>
            <Text style={[style.choice, style.choice4]}
                onPress={() => navigation.navigate('Hotel')}>
                <Ionicons name={"home"} color={"black"} style={style.homeIcon}></Ionicons>
                住宿
            </Text>
            </View>
            <View style={style.rowContain}>
            <Text style={[style.choice, style.choice5]}
                onPress={() => navigation.navigate('Tip')}>
                <Ionicons name={"walk"} color={"black"} style={style.homeIcon}></Ionicons>
                出行贴士
            </Text>
            <Text style={[style.choice, style.choice6]}
                onPress={() => navigation.navigate('Download')}>
                <Ionicons name={"arrow-down-circle"} color={"black"} style={style.homeIcon}></Ionicons>
                下载
            </Text>
            </View>
            <Image
            style={style.pandaImage}
            source={require('./images/panda.jpg')}
            />
        </View> 
        )
    }
}

// 声明样式
const style = StyleSheet.create({
    contain: {
        alignItems: 'center',
    },
    // 标语部分的样式
    sloganContain:{//标语的外部容器
        width: 0.8*Dimensions.get('window').width,
        flexDirection: 'column',
        marginBottom: 20,
        marginTop: 20,
        alignItems: 'center'
    },
    slogan:{//标语样式
        color: '#101010',
        fontSize: 25,
        shadowColor: "#222222",
        // shadowOffset: { width: 2, height: 2 },
        // shadowOpacity: 0.2,
        // shadowRadius: 3,
        // elevation: 5,
    },
    slogan1:{ //第1行标语额外的样式
        width: 0.8*Dimensions.get('window').width,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    slogan2:{ //第2行标语额外的样式
        marginLeft:20,
        width: 0.5*Dimensions.get('window').width,
    },
    sloganIcon:{
        color: '#377F7F',
        fontSize: 45,
    },
    slogaText:{
        marginLeft: 5,
        fontSize: 25,
        color: '#101010',
    },
    rowContain: {//首页选项的行
        width: 0.8*Dimensions.get('window').width,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    choice: { //首页的每一个选项
        color: '#101010',
        width: 0.35*Dimensions.get('window').width,
        height: 60,
        lineHeight: 60,
        textAlign: 'center',
        fontSize: 20,
        margin: 10,
        backgroundColor:'#2DCDBC',
        borderRadius: 20
    },
    // 每一个选项的独特颜色设置
    choice1:{
        backgroundColor:'#3BA3E0'
    },
    choice2:{
        backgroundColor:'#2AD5CC'
    },
    choice3:{
        backgroundColor:'#43CF94'
    },
    choice4:{
        backgroundColor:'#C3D52A'
    },
    choice5:{
        backgroundColor:'#2DCDBC'
    },
    choice6:{
        backgroundColor:'#E0BF43'
    },
    homeIcon: { //首页中图标的样式
        fontSize: 25,
        fontWeight: 20,
    },
    homeIcon1:{
        color: '#D34040'
    },
    pandaImage: { //熊猫图片的样式
        height: 200,
        // 获取当前设备window的尺寸
        width: 0.8*Dimensions.get('window').width,
        marginTop: 20
    }
})