import React, {useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import CONST from '../constants';
import MyButton from '../components/MyButton';
const {width, height} = Dimensions.get('window');
const LoginScreen = ({Navigation}) => {
  const [confirm, setConfirm] = useState(null);
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpScreen, setIsOtpScreen] = useState(true);

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
    confirm
      .confirm(otp)
      .then((res) => {
        console.log('OTP varify' + res);
      })
      .catch((err) => {
        console.log('Wrong OTP!! Please enter correct OTP' + err);
      });
    // () => Navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.ImageBackground}
        source={require('../images/bg3.jpg')}>
        <Image
          source={require('../images/logo1.png')}
          style={{
            width: width,
            height: height * 0.35,
            position: 'absolute',
            top: height * 0.035,
            alignSelf: 'center',
          }}></Image>
        {isOtpScreen ? (
          <View>
            <TextInput
              onChangeText={(otp) => setOtp(otp)}
              value={otp}
              placeholder="Enter OTP"
              underlineColorAndroid={'transparent'}
              style={styles.otpInput}
            />
            <MyButton name="Submit" onPress={() => verifyOTP(otp)} />
          </View>
        ) : (
          <View>
            <View style={styles.numberBox}>
              <Text style={styles.numberInput}> +91 |</Text>
              <TextInput
                keyboardType="number-pad"
                onChangeText={(mob) => setMobile(mob)}
                value={mobile}
                placeholder="Enter number"
                underlineColorAndroid={'transparent'}
                style={{fontSize: 20, fontWeight: '900', paddingLeft: 10}}
              />
            </View>
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
    backgroundColor: CONST.backgroundColor,
  },
  otpInput: {
    borderRadius: 2,
    alignSelf: 'center',
    width: '40%',
    fontSize: 30,
    fontWeight: '900',
    borderWidth: 1,
    padding: 5,
    textAlign: 'center',
  },
  ImageBackground: {
    height: height * 1.22,
    paddingBottom: 20,
    width: width,
    justifyContent: 'flex-end',
    flex: 1,
  },
  numberInput: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  numberBox: {
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1,
    width: '60%',
    alignSelf: 'center',
  },
});

export default LoginScreen;
