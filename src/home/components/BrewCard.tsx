import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import * as colors from '../../colors';
import * as layout from '../../layout';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.offWhite,
    borderRadius: 20,
    padding: layout.padding.m,
    height: 80,
  },
});

const BrewCard = () => {
  return (
    <View style={styles.container}>
      <Text>BrewCard</Text>
    </View>
  );
};

export default BrewCard;
