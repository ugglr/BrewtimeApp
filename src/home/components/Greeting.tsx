import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

import * as fonts from '../../fonts';
import * as colors from '../../colors';
import * as layout from '../../layout';

const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.brown,
    borderBottomRightRadius: 40,
    height: height * 0.22,
    justifyContent: 'flex-end',
    paddingBottom: 36,
    paddingHorizontal: layout.margins.xl,
  },
  title: {
    color: colors.whiteShadow,
    marginBottom: 8,
  },
  subtitle: {
    color: colors.whiteShadow,
  },
});

const Greeting = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={[fonts.H2, styles.title]}>Hello 👋</Text>
        <Text style={[fonts.P, styles.subtitle]}>
          What are we brewing today?
        </Text>
      </View>
    </View>
  );
};

export default Greeting;
