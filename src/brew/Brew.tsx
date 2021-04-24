import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {BrewHeader} from './components';

import * as fonts from '../fonts';
import * as colors from '../colors';
import * as layout from '../layout';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteShadow,
    flex: 1,
  },
});

const Brew = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BrewHeader title="Brewtime" onCancel={() => navigation.pop()} />
    </View>
  );
};

export default Brew;
