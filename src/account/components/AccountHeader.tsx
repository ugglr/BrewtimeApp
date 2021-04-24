import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AntIcon} from '../../basic';

import * as colors from '../../colors';
import * as fonts from '../../fonts';
import * as layout from '../../layout';

const styles = StyleSheet.create({
  topContainer: {
    alignItems: 'center',
    backgroundColor: colors.brown,
    borderBottomEndRadius: 120,
    borderBottomStartRadius: 120,
    padding: layout.margins.xl,
    paddingTop: 60,
  },
  title: {
    ...fonts.H1,
    color: colors.whiteShadow,
  },
});

const AccountHeader = () => {
  return (
    <View style={styles.topContainer}>
      <AntIcon name="rest" size={120} color={colors.whiteShadow} />
      <Text style={styles.title}>Account</Text>
    </View>
  );
};

export default AccountHeader;
