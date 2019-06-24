import React from 'react';
import { Text, ToastAndroid, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import style from './style';
import { Table, Row, Rows } from 'react-native-table-component';

export default class TemporadaDetalhe extends React.Component {
    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });

        this.setState({ loadingFont: false });
    }

    constructor(props) {
        super(props);
        
        this.state = {
            loading: true,
            loadingFont: true,
            season: this.props.navigation.getParam('season'),
            round: this.props.navigation.getParam('round'),
        };
    }

    // Sempre que entrar nesta tela
    componentDidMount() {
        this.getData(this.state.season, this.state.round);
    }

    static navigationOptions = (props) => {
        return {
            title: 'Detalhe da corrida ' +
            props.navigation.state.params.season + 
            '-' +
            props.navigation.state.params.round,
        };
    }

    getData(season, round) {
        const url = `http://ergast.com/api/f1/${season}/${round}/results.json`;
        
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            
            const { Results } = data.MRData.RaceTable.Races[0];
            
            tableHeader = ['Posição', 'Piloto', 'Escuderia'];
            var tableData = new Array(Results.length);

            for (i = 0; i < Results.length; i++) {
                tableData[i] = [
                    Results[i].position.toString(),
                    Results[i].Driver.givenName,
                    Results[i].Constructor.name
                ];
            }

            this.setState({
                data: data.MRData.RaceTable.Races[0],
                tableHeader,
                tableData,
                loading: false,
            });

            console.log('tableHeader:', this.state.tableHeader);
            console.log('tableData:', this.state.tableData);
        })
        .catch((err) => {
            console.log(err);
            ToastAndroid.show(err, ToastAndroid.LONG);
        });
    }

    keyExtractor = (item, index) => index.toString()
    renderConteudo() {
        const { data } = this.state; // destruct (pega o "data" dentro de this.state e joga em uma constante "data")
        
        return (
            <View>
                <Text style={ style.titulo }>{ data.raceName }</Text>
                <Text style={ style.texto }>Localização: { data.Circuit.Location.locality } in { data.Circuit.Location.country }</Text>
                <Text style={ style.texto }>Quando: { data.date }</Text>
                <Text style={ style.texto }>Resultado</Text>
                <Table borderStyle={ {borderWidth: 2, borderColor: '#c8e1ff'} }>
                    <Row data={this.state.tableHeader} style={style.head} textStyle={style.text}/>
                    <Rows data={this.state.tableData} textStyle={style.text}/>
                </Table>
            </View>
        );
    }

    render() {
        const { loading } = this.state;
        const { loadingFont } = this.state;
        
        if (loadingFont) {
            return <Expo.AppLoading />;
        }

        return (
            <SafeAreaView style={ style.container }>
                { loading || loadingFont ? 
                    <Text style={ style.texto }>
                        Carregando...
                    </Text>
                :
                    this.renderConteudo()
                }
            </SafeAreaView>
        );
    }
}
