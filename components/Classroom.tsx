import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Classroom = ({props}) => {
  return (
    <View style={{
        justifyContent:'center',
        alignItems:'center',
      }}>
      <ImageBackground source={require('../assets/dummy1.png')}
        style={{
          width:'90%',
          height:250,
          borderRadius:15,
          marginVertical:20,
          backgroundColor:'blue'
        }}
      >
        <Text style={{
            textAlign:'center',
            color:'#fff',
            fontSize:30,
            fontWeight:'700',
            opacity:1,
            marginBottom:50,
        }}>{props.class} </Text>
        <Text
          style={{
            color:'#fff',
            fontSize:20,
            marginLeft:20,
            fontWeight:'500'   
          }}
        > {props.teacher} </Text>
        <View
          style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            paddingHorizontal:20,
          }}
        >

           <View style={{
            width:'100%',
            height:2,
            backgroundColor:'black'
           }}></View> 
          
            <Image source={require('../assets/noAvatar.png')} 
               style={{
                width:100,
                height:100,
                position:'absolute',
                right:0,
                opacity:1
               }}
              />
        </View>
        <View>
          <Text
           style={{
            position:'absolute',
            bottom:-110,
            right:20,
            color:'#fff',
            fontSize:20,
            fontWeight:'600'
           }}
          >{props.Code}</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Classroom

const styles = StyleSheet.create({})