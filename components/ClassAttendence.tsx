import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ClassAttendence = () => {
  return (
    <View style={styles.Attendence}>
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.content}>Date </Text>
      <Text style={styles.content}>3-Mar-2022</Text>
    </View>
    <Text style={styles.content}>Present</Text>
  </View>
 
  )
}

export default ClassAttendence

const styles = StyleSheet.create({
    Attendence: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'green',
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 5,
        marginBottom:15
      },
      content: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
      }
})