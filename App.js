import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Seasons from './components/Seasons';
import { SafeAreaView } from 'react-navigation';

export default class App extends React.Component {
  getData(season) {
    const url = `http://ergast.com/api/f1/${season}.json?limit=10&offset=999`;
    console.log(url);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Seasons joaozinho={ this.getData } />
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
