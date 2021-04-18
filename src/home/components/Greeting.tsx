import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import * as fonts from '../../fonts';
import * as colors from '../../colors';
import * as responsive from '../../responsive';

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginHorizontal: responsive.sideMargin.xl,
  },
  title: {
    marginBottom: 8,
  },
});

const Greeting = () => {
  return (
    <View style={styles.container}>
      <Text style={[fonts.H2, styles.title]}>Hello 👋</Text>
      <Text style={[fonts.P]}>What are we brewing today?</Text>
    </View>
  );
};

export default Greeting;
