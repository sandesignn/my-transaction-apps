import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors} from '../../../utils/colors';

const Input = ({label, placeholder, secureTextEntry, value, onChangeText}) => {
  const [border, setborder] = useState(colors.border.primary);
  const onFocusForm = () => {
    setborder(colors.border.secondary);
  };
  const onBlurForm = () => {
    setborder(colors.border.primary);
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input(border)}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: (border) => ({
    borderBottomWidth: 1,
    borderColor: border,
    color: colors.text.secondary,
    fontSize: 18,
    paddingVertical: 8,
    fontWeight: 'bold',
    fontFamily: 'Alata-Regular',
  }),
  label: {
    fontFamily: 'Alata-Regular',
    color: colors.text.secondary,
  },
});
