import React from 'react';
import {Text, View} from 'react-native';
import CONST from '../constants';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
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

export default LoginScreen;
