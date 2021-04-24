import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import BrewCard from './BrewCard';
import HomeHeader from './HomeHeader';

import * as colors from '../../colors';
import * as layout from '../../layout';
import {BrewType} from '../../types';
import HomeFooter from './HomeFooter';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  list: {
    backgroundColor: colors.brown,
  },
  listHeader: {
    marginBottom: 8,
  },
  listContent: {
    backgroundColor: colors.whiteShadow,
  },
  cardContainer: {
    paddingHorizontal: layout.margins.l,
  },
  listFooter: {
    marginTop: 60,
  },
});

type Props = {
  data: Array<BrewType>;
};

const BrewsList = ({navigation, route, data}: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => `${item.id}`}
        ListHeaderComponent={() => <HomeHeader {...{navigation}} />}
        renderItem={({item: {id, brewMethod, brewDate}}) => (
          <View style={styles.cardContainer}>
            <BrewCard
              onPress={() => navigation.navigate('brew-details', {id})}
              {...{brewMethod, brewDate}}
            />
          </View>
        )}
        ListFooterComponent={() => <HomeFooter />}
        showsVerticalScrollIndicator={false}
        style={styles.list}
        ListHeaderComponentStyle={styles.listHeader}
        contentContainerStyle={styles.listContent}
        ListFooterComponentStyle={styles.listFooter}
      />
    </View>
  );
};

export default BrewsList;
