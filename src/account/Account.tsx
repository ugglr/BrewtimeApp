import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {AntIcon} from '../basic';
import {AccountHeader} from './components';

import * as colors from '../colors';
import * as fonts from '../fonts';
import * as layout from '../layout';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backContainer: {
    position: 'absolute',
    right: layout.margins.xl,
    top: 52,
    zIndex: 1,
  },
  scroll: {
    backgroundColor: colors.brown,
  },
  scrollContent: {
    backgroundColor: colors.whiteShadow,
    flex: 1,
  },
});

const Account = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.pop()}
        style={styles.backContainer}>
        <AntIcon name="close" color={colors.white} size={32} />
        <Text>close</Text>
      </TouchableOpacity>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}>
        <AccountHeader />
      </ScrollView>
    </View>
  );
};

export default Account;
