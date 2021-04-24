import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {AntIcon} from '../../basic';

import * as fonts from '../../fonts';
import * as colors from '../../colors';
import * as layout from '../../layout';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.brown,
    borderBottomRightRadius: 40,
    height: height * 0.22,
    justifyContent: 'flex-end',
    paddingBottom: 36,
    paddingHorizontal: layout.margins.xl,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.whiteShadow,
    marginBottom: 8,
  },
  subtitle: {
    color: colors.whiteShadow,
  },
  iconContainer: {
    alignItems: 'center',
    borderRadius: 25,
    borderColor: colors.whiteShadow,
    borderWidth: 2,
    height: 50,
    justifyContent: 'center',
    width: 50,
  },
});

const HomeHeader = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text style={[fonts.H2, styles.title]}>Hello 👋</Text>
          <Text style={[fonts.P, styles.subtitle]}>
            What are we brewing today?
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('account')}
          style={styles.iconContainer}>
          <AntIcon name="user" color={colors.whiteShadow} size={28} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
