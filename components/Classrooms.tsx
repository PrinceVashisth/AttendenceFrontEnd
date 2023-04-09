import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Classroom from './Classroom'
import {data} from '../dummyData';
const Classrooms = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Classroom props={data[0]}/>
      <Classroom props={data[1]}/>
      <Classroom props={data[2]}/>
      <Classroom props={data[3]}/>
      <Classroom props={data[4]}/>
      <Classroom props={data[5]}/>
      <Classroom props={data[6]}/>
    </ScrollView>
  )
}

export default Classrooms

const styles = StyleSheet.create({
  container:{
    marginBottom:50
  }
})