import * as React from 'react'
import { Text, View, TextInput, Image } from 'react-native'

export default HomeComponent = () => {
  const [value, onChangeText] = React.useState('')

  return (
    <>
      <Image
        style={{ height: 250, width: 250 }}
        source={require('../../img/沙滩.png')}
      />
      <View style={{
        backgroundColor: 'white',
        width: '80%',
        borderRadius: 20,
        marginBottom: 100
      }} >
        <TextInput
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            height: 50,
            fontSize: 22,
            textAlign: 'center',
            borderRadius: 50,
          }}
          placeholder='输入想要查询的城市吧'
          onChangeText={text => onChangeText(text)}
          value={value}
        />
        <Image
          style={{ height: 23, width: 23, position: 'absolute', marginLeft: '85%', marginTop: 13 }}
          source={require('../../img/arrow-right.png')}
        />
      </View>
    </>
  )
}