import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import BrewCard from './BrewCard';

import * as fonts from '../../fonts';
import * as colors from '../../colors';
import * as layout from '../../layout';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: layout.sideMargin.xl,
  },
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    marginBottom: 20,
    marginTop: 20,
    textDecorationLine: 'underline',
    textDecorationColor: colors.brown,
  },
});

const BrewsList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[fonts.H2, styles.title]}>Brews.</Text>
      </View>

      <BrewCard />
    </View>
  );
};

export default BrewsList;
