import React from 'react';
import { StyleSheet } from 'react-native';
import Seasons from '../../components/Seasons';
import { SafeAreaView } from 'react-navigation';
import LogoTitle from '../../components/LogoTitle';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
        this.redirectTo = this.redirectTo.bind(this);
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });
        this.setState({ loading: false });
    }

    static navigationOptions = () => {
        return {
            headerTitle: <LogoTitle />,
        };
    }

    redirectTo(season) {
        this.props.navigation.navigate('Menu', {
            season,
        })
    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />;
        }
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
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
