import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Input = ({label, placeholder, secureTextEntry}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: '#BDBDBD',
    color: '#5C5C5C',
    fontSize: 18,
    paddingVertical: 8,
    fontWeight: 'bold',
    fontFamily: 'Alata-Regular',
  },
  label: {
    fontFamily: 'Alata-Regular',
    color: '#5C5C5C',
  },
});
