import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Classrooms from './Classrooms'
import { Button ,TouchableOpacity } from "react-native";
import { Form,FormItem } from 'react-native-form-component';
import Icon from 'react-native-vector-icons/Entypo';
const StudentHome = () => {
 const JoinClassroom=()=>{
  console.log("object");
 }
 const [email, setEmail] = useState('');
 const [show, setShow] = useState(false);
 const emailInput = useRef();

  return (
    <View>
      {/* pop up classroom joining form */}
      <View>
         
      </View>
<TouchableOpacity style={{
    backgroundColor:'#3A395F',
    borderRadius:10,
    width:250,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    zIndex:2,
    bottom:70,
    right:20
}}>
    <Text style={{
      color:'#fff',
      fontSize:20,
      textAlign:'center',
      fontWeight:'600',
      }}
      onPress={() => {
        setShow(true);
      }}
      >Join a Classroom</Text>
</TouchableOpacity>
     
      <Classrooms/>
      <View style={show ? styles.formbg : {...styles.formbg, top: -1000}}>
        <View
          style={{
            backgroundColor: 'blue',
            padding: 20,
            borderRadius: 10,
          }}>
          <Icon
            name="cross"
            size={40}
            color={'red'}
            style={{marginLeft: 'auto', marginBottom: 5}}
            onPress={() => {
              setShow(false);
            }}
          />
          <Form onButtonPress={() => console.warn('do something')}>
            <FormItem
              isRequired
              placeholder="Enter Code ..."
              value={email}
              onChangeText={email => setEmail(email)}
              asterik
              ref={emailInput}
            />
          </Form>
        </View>
      </View>

    </View>
  )
}

export default StudentHome

const styles = StyleSheet.create({
  formbg: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    paddingTop: '40%',
    paddingBottom: '50%',
    backgroundColor: 'rgba(128,128,128,0.8)',
    paddingHorizontal: '5%',
    flexDirection: 'column',
    zIndex: 99,
  },
})