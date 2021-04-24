import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import * as colors from '../../colors';
import * as fonts from '../../fonts';
import * as layout from '../../layout';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.brown,
    height: 200,
  },
  title: {
    ...fonts.H2,
    color: colors.white,
    textAlign: 'center',
    marginTop: layout.margins.xl,
  },
});

const HomeFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Brewtime.</Text>
    </View>
  );
};

export default HomeFooter;
