import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ILLogo} from '../../assets';

const Splash = () => {
  return (
    <View style={styles.page}>
      <ILLogo />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
});
