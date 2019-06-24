import React, { PureComponent } from 'react';
import { Button, StyleSheet, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import style from './style';


export default class Menu extends PureComponent {
    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });
        this.setState({
            loading: false,
            season: this.props.navigation.getParam('season'),
        });
    }

    constructor(props) {
        super(props);
        this.state = { loading: true };

        this.abrirTemporada = this.abrirTemporada.bind(this);
        this.abrirListaPilotos = this.abrirListaPilotos.bind(this);
    }

    static navigationOptions = (props) => {

        return {
            title: 'F1 - Temporada ' + props.navigation.state.params.season,
        };
    }
    
    abrirTemporada() {
        const { season } = this.state;
        this.props.navigation.navigate('ListaCorridas', {
            season,
        })
    }
    
    abrirListaPilotos() {
        const { season } = this.state;
        
        this.props.navigation.navigate('ListaPilotos', {
            season,
        })
    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />;
        }
        
        return (
            <SafeAreaView style={ style.container }>
                <TouchableHighlight 
                    style={ style.botaoEspaco}>
                    <Button key='btnCorrida' color="#fe1e00" onPress={ () => this.abrirTemporada()} title="Corridas" />
                </TouchableHighlight>
                <TouchableHighlight 
                    style={ style.botaoEspaco}>
                    <Button key='btnPiloto' color="#fe1e00" onPress={ () => this.abrirListaPilotos()} title="Pilotos" />
                </TouchableHighlight>
            </SafeAreaView>
        );
    }
}
