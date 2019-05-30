import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScreen from './views/Home';
import ListaPilotosScreen from './views/ListaPilotos';
import MenuScreen from './views/Menu';
import TemporadaDetalheScreen from './views/TemporadaDetalhe';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        // Adicionar as demais telas aqui
        Menu: {
            screen: MenuScreen,
        },
        TemporadaDetalhe: {
            screen: TemporadaDetalheScreen,
        },
        ListaPilotos: {
            screen: ListaPilotosScreen,
        },

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