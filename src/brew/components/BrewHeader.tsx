import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {AntIcon} from '../../basic';

import * as colors from '../../colors';
import * as fonts from '../../fonts';
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
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    ...fonts.H2,
    color: colors.whiteShadow,
  },
  cancelContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  cancelText: {
    ...fonts.P,
    color: colors.whiteShadow,
    marginRight: 8,
  },
});

type Props = {
  title: string;
  onCancel: () => void;
};

const BrewHeader = ({title, onCancel}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onCancel} style={styles.cancelContainer}>
          <Text style={styles.cancelText}>cancel</Text>
          <AntIcon name="close" size={24} color={colors.whiteShadow} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BrewHeader;
