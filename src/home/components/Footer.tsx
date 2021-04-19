import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {ActionButton} from '../../components/basic';

import * as layout from '../../layout';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row-reverse',
    height: 80,
    bottom: 40,
    right: layout.sideMargin.xl,
  },
});

const Footer = () => {
  return (
    <View style={styles.container}>
      <ActionButton icon="plus" onPress={() => console.log('pressed')} />
    </View>
  );
};

export default Footer;
