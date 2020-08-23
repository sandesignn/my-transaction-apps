import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ILLogoGS, ILGetStarted} from '../../assets';
import {Button} from '../../components';

const GetStarted = () => {
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
        <Button title="Login" />
        <Button title="Register" />
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
    fontSize: 22,
  },
  descText: {
    marginTop: 7,
    fontSize: 14,
    color: '#4F4F4F',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
