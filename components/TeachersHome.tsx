import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Classrooms from './Classrooms';
import {Form, FormItem} from 'react-native-form-component';
import Icon from 'react-native-vector-icons/Entypo';
const TeachersHome = () => {
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(false);
  const emailInput = useRef();
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: 'gray',
          position: 'absolute',
          bottom: 70,
          right: 20,
          zIndex: 2,
          padding: 15,
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: '600',
          }}
          onPress={() => {
            setShow(true);
          }}>
          Create a Classroom
        </Text>
      </TouchableOpacity>
      <Classrooms />

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
  );
};

export default TeachersHome;

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
});
