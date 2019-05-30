import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default class ListaPilotos extends React.Component {
    state = {
        season: this.props.navigation.getParam('season'),
    }

    static navigationOptions = () => {
        return {
            title: 'F1 - Pilotos de ' + this.state.season,
        };
    }

    render() {
        return (
            <SafeAreaView>
                <Text>Pilotos</Text>
            </SafeAreaView>
        );
    }
}