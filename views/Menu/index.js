import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { Button, Text } from 'native-base';

import style from './style';

export default class Menu extends PureComponent {
    state = {
        season: this.props.navigation.getParam('season'),
    }

    constructor(props) {
        super(props);
  
        this.abrirTemporada = this.abrirTemporada.bind(this);
        this.abrirListaPilotos = this.abrirListaPilotos.bind(this);
    }
    static navigationOptions = (props) => {

        return {
            title: 'F1 - Temporada ' + props.navigation.state.params.season,
        };
    }
    
    abrirTemporada() {
        console.log('Abrindo temporada');
        this.props.navigation.navigate('TemporadaDetalhe', {
            season: this.props.navigation.getParam('season'),
        })
    }
    
    abrirListaPilotos() {
        console.log('Abrindo a lista de pilotos');
        this.props.navigation.navigate('ListaPilotos', {
            season: this.state.season,
        })
    }

    render() {
        const { season } = this.state;
        console.log('Temporada:' + season);

        return (
            <SafeAreaView>
                <View style={ style.container }>
                    <Button key='btnCorrida' onPress={ () => this.abrirTemporada()}>
                        <Text>Corridas</Text>
                    </Button>
                    <Button key='btnPiloto' onPress={ () => this.abrirListaPilotos()}>
                        <Text>Pilotos</Text>
                    </Button>
                </View>
            </SafeAreaView>
        );
    }
}