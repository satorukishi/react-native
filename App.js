import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScreen from './views/Home';
import ListaPilotosScreen from './views/ListaPilotos';
import MenuScreen from './views/Menu';
import ListaCorridasScreen from './views/ListaCorridas';
import DetalheCorridaScreen from './views/DetalheCorrida';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        // Adicionar as demais telas aqui
        Menu: {
            screen: MenuScreen,
        },
        ListaCorridas: {
            screen: ListaCorridasScreen,
        },
        ListaPilotos: {
            screen: ListaPilotosScreen,
        },
        DetalheCorrida: {
            screen: DetalheCorridaScreen,
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