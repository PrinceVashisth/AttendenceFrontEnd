import {StyleSheet, Text, View} from 'react-native';
import React , {useState}from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Attendence from './Attendence';
const StudentList = () => {
  const [ShowList, setShowList] = useState(false);
  
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>ClassRoom name</Text>
        <View style={{flexDirection: 'row', gap: 20, ...styles.text}}>
          <Text style={styles.text}>Present</Text>
          <Text style={styles.text}>20</Text>
        </View>
        <Icon name="down" size={20} color="black" onPress={()=>{setShowList(!ShowList)}}
         style={{transform: [{rotateY: "10deg"}]}}
        />
      </View>

      <View style={styles.dropdown}>
        {ShowList && <Attendence/>  }
        {ShowList && <Attendence/>  }
        {ShowList && <Attendence/>  }
        {ShowList && <Attendence/>  }
      </View>
    </View>
  );
};

export default StudentList;

const styles = StyleSheet.create({
  Parent:{marginBottom:20},
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'gray',
    marginTop: 20,
    width: '94%',
    marginLeft: '3%',
    borderRadius: 5,
    padding: 10,
    opacity: 0.85,
  },
  text: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
  dropdown: {
    backgroundColor:'gray',
    marginHorizontal:'3%',
  },

});
