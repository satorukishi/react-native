import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Seasons from '../../components/Seasons';
import { SafeAreaView } from 'react-navigation';

export default class App extends React.Component {
  constructor(props) {
      super(props);

      this.redirectTo = this.redirectTo.bind(this);
  }
  static navigationOptions = () => {
      return {
          title: 'Home',
      };
  }

  redirectTo(season) {
      this.props.navigation.navigate('TemporadaDetalhe', {
          season,
          name: 'Satoru Kishi',
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
