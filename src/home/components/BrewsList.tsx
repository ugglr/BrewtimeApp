import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import BrewCard from './BrewCard';

import * as fonts from '../../fonts';
import * as colors from '../../colors';
import * as layout from '../../layout';
import {BrewType} from '../../types';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: layout.margins.xl,
  },
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    marginTop: 20,
    textDecorationLine: 'underline',
    textDecorationColor: colors.brown,
  },
});

type Props = {
  data: Array<BrewType>;
};

const BrewsList = ({data}: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item: {brewMethod, brewDate}}) => (
          <BrewCard {...{brewMethod, brewDate}} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default BrewsList;
