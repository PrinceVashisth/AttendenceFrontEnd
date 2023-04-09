import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import Icons from 'react-native-vector-icons/Entypo';
import Classrooms from './Classrooms';

const ProfileLeftSide = ({props}) => {
    const [Visible, setVisible] = useState(false);
    useEffect(() => {
    setVisible(props);   
    }, [props]);
  const handelBar = ()=>{
    setVisible(!Visible);
  }

  return (
    <View style={Visible?styles.container:{...styles.container , left:-1000}}>
        <View style={styles.icon}>
           <Icons name="cross" size={40} color={"white"} onPress={handelBar}/>   
        </View>
        <View style={{marginBottom:170}}>
        <Classrooms/> 
            </View> 
       </View>
  )
}

export default ProfileLeftSide

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        top:0,
        width:'100%',
        height:'100%',
        backgroundColor:'gray',
        zIndex:5,
       },
       icon:{marginLeft:'auto',marginRight:10}
})