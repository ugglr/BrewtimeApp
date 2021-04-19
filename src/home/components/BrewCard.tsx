import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import * as colors from '../../colors';
import * as layout from '../../layout';
import * as types from '../../types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.offWhite,
    borderRadius: 20,
    height: 80,
    marginTop: layout.margins.m,
    padding: layout.margins.m,
  },
});

const BrewCard = ({brewMethod, brewDate}: types.BrewType) => {
  return (
    <View style={styles.container}>
      <Text>BrewCard</Text>
      <Text>{brewMethod}</Text>
      <Text>{brewDate}</Text>
    </View>
  );
};

export default BrewCard;
