import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Image} from 'react-native';
import ProfileLeftSide from './ProfileLeftSide';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ClassAttendence from './ClassAttendence';
const ClassroomStudent = () => {
  const [Active, setActive] = useState(false);
  return (
    <View>
      <ImageBackground
        source={require('../assets/ClassBg.png')}
        style={styles.background}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            marginHorizontal: 20,
            alignItems: 'center',
          }}>
          <Icon
            name="hamburger"
            size={40}
            color={'white'}
            onPress={() => {
              setActive(!Active);
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#BD4444',
              padding: 15,
              borderRadius: 5,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontWeight: '600',
              }}>
              Leave Classroom
            </Text>
          </TouchableOpacity>
        </View>
        {/* Left Bar */}
        <ProfileLeftSide props={Active} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 20,
          }}>
          <View style={styles.card}>
            <Text style={styles.content}>Total Attendence</Text>
            <Text style={styles.data}>20</Text>
            <Text style={styles.content}>Total Present</Text>
            <Text style={styles.data}>15</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.content}>Classroom Name</Text>
            <Text style={styles.data}>Maths 3 Sem</Text>
            <Text style={styles.content}>Classroom Code</Text>
            <Text style={styles.data}>maths3sem</Text>
          </View>
        </View>
        <View>
          <Text style={styles.Heading}>Attendence</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
           <ClassAttendence/>
           <ClassAttendence/>
           <ClassAttendence/>
           <ClassAttendence/>
           <ClassAttendence/>
           <ClassAttendence/>
           <ClassAttendence/>
           <ClassAttendence/>
           <ClassAttendence/>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ClassroomStudent;

const styles = StyleSheet.create({
  background: {
    height: '100%',
    opacity: 0.95,
  },
  card: {
    backgroundColor: 'gray',
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
    opacity: 0.8,
  },
  content: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  data: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
  },
  Heading: {
    fontSize: 40,
    color: 'white',
    fontWeight: '600',
    marginTop: 10,
    marginLeft: 30,
  },
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
});
