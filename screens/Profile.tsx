import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileStudent from '../components/ProfileStudent';
import ProfileTeacher from '../components/ProfileTeacher';
import Navbar from '../components/Navbar';

const Profile = () => {  
  const user = "vv";
  
  return (
    <View>
      <Navbar/>
      {user?<ProfileStudent/>:<ProfileTeacher/>}
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})