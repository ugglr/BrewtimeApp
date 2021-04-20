import React from 'react';
import {View, StyleSheet} from 'react-native';
import {BrewType} from '../types';

import {BrewsList, Greeting, Footer} from './components';

import * as colors from '../colors';
import * as layout from '../layout';

const BREWS: Array<BrewType> = [
  {
    brewMethod: 'pour-over',
    brewDate: '2020-12-12',
  },
  {
    brewMethod: 'pour-over',
    brewDate: '2020-12-12',
  },
  {
    brewMethod: 'pour-over',
    brewDate: '2020-12-12',
  },
  {
    brewMethod: 'pour-over',
    brewDate: '2020-12-12',
  },
  {
    brewMethod: 'pour-over',
    brewDate: '2020-12-12',
  },
  {
    brewMethod: 'pour-over',
    brewDate: '2020-12-12',
  },
  {
    brewMethod: 'pour-over',
    brewDate: '2020-12-12',
  },
  {
    brewMethod: 'pour-over',
    brewDate: '2020-12-12',
  },
  {
    brewMethod: 'pour-over',
    brewDate: '2020-12-12',
  },
  {
    brewMethod: 'pour-over',
    brewDate: '2020-12-12',
  },
  {
    brewMethod: 'pour-over',
    brewDate: '2020-12-12',
  },
  {
    brewMethod: 'pour-over',
    brewDate: '2020-12-12',
  },
];

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
      <BrewsList data={BREWS} />
      <Footer />
    </View>
  );
};

export default Home;
