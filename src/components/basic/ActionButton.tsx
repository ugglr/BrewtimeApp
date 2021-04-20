import React from 'react';
import {StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import AntIcon, {AntIcons} from './AntIcon';

import * as colors from '../../colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.brown,
    borderRadius: 40,
    height: 80,
    justifyContent: 'center',
    width: 80,
  },
});

type Props = {
  icon: AntIcons;
  onPress: () => void;
};

const ActionButton = ({onPress, icon}: Props) => {
  return (
    <RectButton style={styles.container} onPress={onPress}>
      <AntIcon color={colors.offWhite} size={28} name={icon} />
    </RectButton>
  );
};

export default ActionButton;
