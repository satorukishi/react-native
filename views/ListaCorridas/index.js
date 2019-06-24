import React from 'react';
import { Text, ToastAndroid } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { ListItem } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler';
import style from './style';

export default class TemporadaDetalhe extends React.Component {
    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });
    }

    constructor(props) {
        super(props);
        
        this.state = {
            loading: true,
            season: this.props.navigation.getParam('season'),
        };
    }

    // Sempre que entrar nesta tela
    componentDidMount() {
        this.getData(this.state.season);
    }

    static navigationOptions = (props) => {
        return {
            title: 'Corridas da Temporada ' + props.navigation.state.params.season,
        };
    }

    getData(season) {
        const url = `http://ergast.com/api/f1/${season}.json`;
        
        fetch(url)
        .then((response) => response.json())
        .then((data) => {

            this.setState({
                data: data.MRData.RaceTable.Races,
                loading: false,
            });

        })
        .catch((err) => {
            console.log(err);
            ToastAndroid.show(err, ToastAndroid.LONG);
        });
    }


    keyExtractor = (item, index) => index.toString()
    renderConteudo() {
        const { data } = this.state; // destruct (pega o "data" dentro de this.state e joga em uma constante "data")
        
        // return data.map(this.renderItem);
        return (
            <FlatList
                keyExtractor={ this.keyExtractor }
                data={ data }
                renderItem={ this.renderItem}
            />
        )
    }
    
    renderItem = ({ item }) => (
        <ListItem
            style={ style.liCorridas }
            title={item.raceName}
            subtitle={item.date}
            onPress={ () => this.abrirDetalheCorrida(item.round)}
        />
    )

    abrirDetalheCorrida(round) {
        const { season } = this.state;

        this.props.navigation.navigate('DetalheCorrida', {
            season,
            round,
        })
    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />;
        }
        const { loading } = this.state;

        return (
            <SafeAreaView>
                 { loading ? 
                    <Text>
                        Carregando...
                    </Text>
                :
                    this.renderConteudo()
                 }
            </SafeAreaView>
        );
    }
}
