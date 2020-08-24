import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ILLogoGS, ILGetStarted} from '../../assets';
import {Button} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILLogoGS />
      <View style={styles.IlGetStarted}>
        <ILGetStarted />
      </View>
      <View>
        <Text style={styles.welcomeText}>Welcome to My Transaction!</Text>
        <Text style={styles.descText}>
          Now you can monitoring your money transactions with My Transaction
        </Text>
      </View>
      <View style={styles.button}>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
        <Button
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
      <View>
        <Text style={styles.term}>
          By logging in or register, I agree to our Term Of Service and Police
          Service
        </Text>
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 16,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
  },
  IlGetStarted: {
    marginTop: 149,
    alignItems: 'center',
  },
  welcomeText: {
    marginTop: 92,
    fontWeight: 'bold',
    fontSize: 24,
    fontFamily: 'Alata-Reguler',
  },
  descText: {
    marginTop: 7,
    fontSize: 14,
    color: '#4F4F4F',
    fontFamily: 'Alata-Reguler',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  term: {
    fontFamily: 'Alata-Reguler',
    color: '#4F4F4F',
    fontSize: 12,
  },
});
