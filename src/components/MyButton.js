import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CONST from '../constants';

const MyButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.button, props.style]}
      {...props}>
      <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '80%',
    height: 40,
    borderRadius: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: CONST.primaryColor,
    elevation: 2,
  },
  text: {
    fontWeight: '700',
    fontSize: 18,
  },
});

export default MyButton;
