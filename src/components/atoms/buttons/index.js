import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Button = ({type, title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#07689F',
    paddingVertical: 15,
    borderRadius: 5,
    width: 190,
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
