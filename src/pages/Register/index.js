import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Back, ILRegister} from '../../assets';
import {Input, Button, Gap} from '../../components/atoms';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

const Register = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('GetStarted');
        }}>
        <Back />
      </TouchableOpacity>
      <ScrollView>
        <Gap height={30} />
        <View style={styles.illustration}>
          <ILRegister />
        </View>
        <Gap height={40} />
        <View>
          <Text style={styles.title}>Please fill in a few details bellow</Text>
        </View>
        <Gap height={22} />
        <View>
          <Input label="fullname" placeholder="e.g Merry Jane" />
          <Gap height={20} />
          <Input label="email" placeholder="e.g name@mail.com" />
          <Gap height={20} />
          <Input
            label="password"
            placeholder="**********"
            secureTextEntry={true}
          />
        </View>
        <Gap height={100} />
      </ScrollView>
      <View style={styles.btn}>
        <Button title="Continue" />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Alata-Regular',
    maxWidth: 258,
    fontWeight: 'bold',
    color: '#393939',
  },
  btn: {
    margin: -20,
  },
  illustration: {
    alignItems: 'center',
  },
  eye: {
    marginBottom: -40,
  },
});
