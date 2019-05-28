import React from 'react';

import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScreen from './views/Home';
import TemporadaDetalheScreen from './views/TemporadaDetalhe';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    TemporadaDetalhe: {
      screen: TemporadaDetalheScreen,
    },

    // Adicionar as demais telas aqui
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default createAppContainer(AppNavigator);