/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  SafeAreaView
} from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Routes from './src/utlis/Routes';
const App = () => (

  <Provider store={store}>

    <Routes />
    {/* </SafeAreaView> */}
  </Provider>
);

export default App;