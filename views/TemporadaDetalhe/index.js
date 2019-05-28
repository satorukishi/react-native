import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { ListItem } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler';

export default class TemporadaDetalhe extends React.Component {
    state = {
        season: this.props.navigation.getParam('season'),
        name: this.props.navigation.getParam('name'),
        loading: true,
        data: [],
    }



    // Sempre que entrar nesta tela
    componentDidMount() {
        this.getData(this.state.season);
    }

    static navigationOptions = () => {
        return {
            title: 'Detalhes da Temporada',
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
        });
    }


    keyExtractor = (item, index) => index.toString()
    renderConteudo() {
        const { data } = this.state; // destruct (pega o "data" dentro de this.state e joga em uma constante "data")
        console.log(data);

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
          title={item.raceName}
          subtitle={item.date}
        //   key={ race.round }
        />
    )
    // renderItem(race) {
    //     return (
    //         <ListItem
    //             key={ race.round }
    //             title={ race.raceName }
    //             subtitle={ race.date }
    //         />
    //     );
    // }

    render() {
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
