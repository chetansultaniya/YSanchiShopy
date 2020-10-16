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
import MyButton from '../components/MyButton';
const {width, height} = Dimensions.get('window');
const LoginScreen = () => {
  const [confirm, setConfirm] = useState(null);
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpScreen, setIsOtpScreen] = useState(false);

  const singIn = (mobile) => {
    auth()
      .signInWithPhoneNumber(`+91${mobile}`)
      .then((status) => {
        console.log(status);
        setConfirm(status);
        setIsOtpScreen(true);
      })
      .catch((error) => console.log(error));
  };

  const verifyOTP = (otp) => {
    console.log(otp);
    confirm
      .confirm(otp)
      .then((res) => {
        console.log('OTP varify' + res);
      })
      .catch((err) => {
        console.log('Wrong OTP!! Please enter correct OTP' + err);
      });
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
        {isOtpScreen ? (
          <View>
            <TextInput
              onChangeText={(otp) => setOtp(otp)}
              value={otp}
              placeholder="Enter OTP"
              underlineColorAndroid={'transparent'}
              style={{borderRadius: 30, borderWidth: 1}}
            />
            <MyButton name="Submit" onPress={() => verifyOTP(otp)} />
          </View>
        ) : (
          <View>
            <TextInput
              onChangeText={(mob) => setMobile(mob)}
              value={mobile}
              placeholder="Enter number"
              underlineColorAndroid={'transparent'}
              style={{borderRadius: 30, borderWidth: 1}}
            />
            <MyButton onPress={() => singIn(mobile)} name="Send OTP" />
          </View>
        )}
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
