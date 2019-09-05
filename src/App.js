import React from 'react';
import { Provider } from 'react-redux';
import createStore from './createStore';
import AppNavigator from './AppNavigator';

const store = createStore();

export default () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);
