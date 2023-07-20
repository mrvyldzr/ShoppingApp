
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import AppNavigator from '../src/navigators/AppNavigator';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator /> 
      </NavigationContainer>
    </Provider>
  );
};

export default App;