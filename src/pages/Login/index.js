import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Back, ILLogin} from '../../assets';
import {Input, Button, Gap} from '../../components/atoms';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../utils/colors';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('GetStarted');
        }}>
        <Back />
      </TouchableOpacity>
      <View style={styles.illustration}>
        <ILLogin />
      </View>
      <View>
        <Text style={styles.title}>
          Enter your registered email and password to login
        </Text>
      </View>
      <View>
        <Input label="email" placeholder="e.g name@mail.com" />
        <Gap height={20} />
        <Input
          label="password"
          placeholder="**********"
          secureTextEntry={true}
        />
      </View>
      <Gap height={100} />
      <View style={styles.btn}>
        <Button title="Continue" />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 16,
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Alata-Regular',
    maxWidth: 258,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  btn: {
    margin: -16,
  },
  illustration: {
    alignItems: 'center',
  },
  eye: {
    marginBottom: -40,
  },
});
