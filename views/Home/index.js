import React from 'react';
import { StyleSheet } from 'react-native';
import Seasons from '../../components/Seasons';
import { SafeAreaView } from 'react-navigation';
import LogoTitle from '../../components/LogoTitle';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.redirectTo = this.redirectTo.bind(this);
    }
    static navigationOptions = () => {
        return {
            headerTitle: <LogoTitle />,
        };
    }

    redirectTo(season) {
        console.log(season);
        this.props.navigation.navigate('Menu', {
            season,
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Seasons temporada={ this.redirectTo } />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
