import React from 'react';
import {View, Text} from 'react-native';

import {BrewHeader} from './components';

const BrewDetails = ({navigation, route}) => {
  const {id} = route.params;
  return (
    <View>
      <BrewHeader title="Brew" onCancel={() => navigation.pop()} />
      <Text>Lorem ipsum.... {id}</Text>
    </View>
  );
};

export default BrewDetails;
