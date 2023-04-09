import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/EvilIcons';
import {Image} from 'react-native';
const Navbar = () => {
  return (
    <View style={{
      flexDirection:'row' ,justifyContent:'space-between',paddingHorizontal:10 , alignItems:'center',backgroundColor:'gray',
      paddingVertical:5
    }}>
      <Image source={require('../assets/logo.png')}
       style={{
        width:200,
        height:50,
        borderRadius:5
       }}
      ></Image>
      
      <Image source={require('../assets/noAvatar.png')}
       style={{
        width:50,
        height:50
       }}
       />
      </View>
  )
}

export default Navbar

const styles = StyleSheet.create({})