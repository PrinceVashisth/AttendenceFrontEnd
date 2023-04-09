import { View, Text } from 'react-native'
import React from 'react'
import ClassroomStudent from '../components/ClassroomStudent';
import ClassroomTeacher from '../components/ClassroomTeacher';
import Navbar from '../components/Navbar';

const Classroom = () => {
  const user="hh";
  return (
    <View>
      <Navbar/>
      {user?<ClassroomStudent/>:<ClassroomTeacher/>}
    </View>
  )
}

export default Classroom