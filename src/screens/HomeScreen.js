import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import CONST from '../constants';

const HomeScreen = (props) => {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CONST.backgroundColor,
  },
});

export default HomeScreen;
