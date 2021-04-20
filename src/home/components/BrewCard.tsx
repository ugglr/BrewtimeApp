import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

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

type Props = {
  brewMethod: types.BrewMethods;
  brewDate: string;
  onPress: () => void;
};

const BrewCard = ({brewMethod, brewDate, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>BrewCard</Text>
      <Text>{brewMethod}</Text>
      <Text>{brewDate}</Text>
    </TouchableOpacity>
  );
};

export default BrewCard;
