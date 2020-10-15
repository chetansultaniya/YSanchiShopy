import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CONST from './src/constants';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/store/reducers';
import HomeScreen from './src/screens/HomeScreen';

const store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
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

export default App;
