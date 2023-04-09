import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {ScrollView} from 'react-native';
import StudentList from './StudentList'

const AttendenceListStudent = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:180}}>
      <StudentList/>
      <StudentList/>
      <StudentList/>
      <StudentList/>
      <StudentList/>
      <StudentList/>
      <StudentList/>
      <StudentList/>
      <StudentList/>
    </ScrollView>
  )
}

export default AttendenceListStudent

const styles = StyleSheet.create({})