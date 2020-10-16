import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CONST from '../constants';

const OTPScreen = () => {
  return (
    <View style={styles.container}>
      <Text>OTPScreen</Text>
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

export default OTPScreen;
