import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import CONST from '../constants';
const {width, height} = Dimensions.get('window');
const LoginScreen = () => {
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');

  const singIn = () => {
    auth()
      .signInWithPhoneNumber('+918319229296')
      .then((status) => {
        console.log(status);
        setConfirm(status);
      })
      .catch((error) => console.log(error));
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          width: width,
          height: height,
          justifyContent: 'center',
          paddingBottom: 40,
          position: 'absolute',
        }}
        source={require('../images/bg3.jpg')}>
        <TextInput
          placeholder="Enter number"
          underlineColorAndroid={'transparent'}
          style={{borderRadius: 30, borderWidth: 1}}
        />
        <Button onPress={singIn} title="Send OTP" />
      </ImageBackground>
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
