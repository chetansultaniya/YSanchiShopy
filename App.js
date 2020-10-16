import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CONST from './src/constants';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/store/reducers';
import {NavigationContainer} from '@react-navigation/native';
import MyNavigation from './src/navigations/StackNavigation';
import reduxThunk from 'redux-thunk';
const store = createStore(reducers, applyMiddleware(reduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyNavigation />
      </NavigationContainer>
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
