import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Attendence = () => {
  return (
    <View style={styles.dropboxElement}>
      <View style={styles.ElementDate}>
        <Text style={styles.ElementText}>Date: </Text>
        <Text style={styles.ElementText}>21-mar-2022</Text>
      </View>
      <Text style={styles.ElementText}>Present</Text>
    </View>
  );
};

export default Attendence;

const styles = StyleSheet.create({
  dropboxElement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    padding: 10,
    backgroundColor: 'green',
    marginVertical: 10,
  },
  ElementDate: {
    flexDirection: 'row',
  },
  ElementText: {
    color: 'white',
  },
});
