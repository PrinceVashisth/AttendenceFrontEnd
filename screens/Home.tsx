import { ImageBackground, ImageBackgroundComponent, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StudentHome from '../components/StudentHome';
import TeachersHome from '../components/TeachersHome';
import Navbar from '../components/Navbar';

const Home = () => {
  const user = "student";
  return (
    <View >
      <ImageBackground source={require("../assets/Home.jpg")} style={{
        height:'100%'
      }}>
      <Navbar/>
      {user?<StudentHome/>:<TeachersHome/>}
      </ImageBackground>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})