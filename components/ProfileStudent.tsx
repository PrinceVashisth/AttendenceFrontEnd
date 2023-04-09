import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import Navbar from './Navbar'
import {ImageBackground,Image} from 'react-native'
import { Dropdown }from 'react-native-element-dropdown';
import AttendenceListStudent from './AttendenceListStudent'
import Icon from 'react-native-vector-icons/AntDesign';
import ProfileLeftSide from './ProfileLeftSide';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
  const data = [
    { label: 'name', value: '1' },
    { label: 'Present', value: '2' },
  ];

const ProfileStudent = () => {
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [leftBar, setLeftBar] = useState(false);
 
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          sort by
        </Text>
      );
    }
    return null;
  };
  return (
    <View style={styles.ProfileContainer}>
      <ImageBackground source={require('../assets/profileBg.png')} style={styles.background}>
        {/* Imp Icons */}
         <View style={{ ...styles.container}}>
            <Icons name="hamburger" size={30} color={"white"} onPress={()=>{setLeftBar(!leftBar)}}/>
            <Image source={require('../assets/settingsIcon.png')} style={styles.hamberger}/>
         </View>

         {/* Left Side Container */}
         <ProfileLeftSide props={leftBar}/>
        {/* sort By */}
        <View style={styles.DropContainer}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'sort' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
        {/* Attendence List of Each Classroom */}
         <AttendenceListStudent/>
      </ImageBackground>
    </View>
  )
}

export default ProfileStudent

const styles = StyleSheet.create({
  ProfileContainer:{
   marginBottom:5
  },
  background:{
        width:"100%",
        height:'100%'
    },
    hamberger:{
      width:40,
      height:40
    },
    container:{
      flexDirection:'row',
      marginVertical:20,
      justifyContent:'space-between',
      marginHorizontal:10
    },
    DropContainer: {
      backgroundColor: 'white',
      padding: 16,
      width:'40%',
      borderRadius:20,
      marginLeft:'auto',
      marginRight:10,
      marginVertical:20
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 20,
    },
    selectedTextStyle: {
      fontSize: 20,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    
})