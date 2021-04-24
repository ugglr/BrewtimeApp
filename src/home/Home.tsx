import React from 'react';
import {View, StyleSheet} from 'react-native';
import {BrewType} from '../types';

import {BrewsList, Greeting} from './components';
import {ActionButton} from '../basic';

import * as colors from '../colors';

const BREWS: Array<BrewType> = [
  {
    id: 1,
    brewMethod: 'pour-over',
    brewDate: '2020-12-12',
  },
  {
    id: 2,
    brewMethod: 'pour-over',
    brewDate: '2020-12-12',
  },
  {
    id: 3,
    brewMethod: 'pour-over',
    brewDate: '2020-12-12',
  },
  {
    id: 4,
    brewMethod: 'pour-over',
    brewDate: '2020-12-12',
  },
  {
    id: 5,
    brewMethod: 'pour-over',
    brewDate: '2020-12-12',
  },
  {
    id: 6,
    brewMethod: 'pour-over',
    brewDate: '2020-12-12',
  },
  {
    id: 7,
    brewMethod: 'pour-over',
    brewDate: '2020-12-12',
  },
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteShadow,
    flex: 1,
  },
  actionMenuContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

const Home = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <BrewsList data={BREWS} {...{navigation, route}} />
      <View style={styles.actionMenuContainer}>
        <ActionButton onPress={() => navigation.navigate('brew')} icon="plus" />
      </View>
    </View>
  );
};

export default Home;
