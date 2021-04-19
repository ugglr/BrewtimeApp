import React from 'react';
import {View, StyleSheet} from 'react-native';

import {BrewsList, Greeting, Footer} from './components';

import * as colors from '../colors';
import * as layout from '../layout';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteShadow,
    flex: 1,
  },
});

const Home = () => {
  return (
    <View style={styles.container}>
      <Greeting />
      <BrewsList />
      <Footer />
    </View>
  );
};

export default Home;
