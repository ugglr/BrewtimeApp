import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Greeting} from './components';

import {whiteShadow} from '../colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: whiteShadow,
    flex: 1,
  },
});

const Home = () => {
  return (
    <View style={styles.container}>
      <Greeting />
    </View>
  );
};

export default Home;
