import React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';

const Onboarding = ({navigation}) => {
  const onSignUp = () => navigation.navigate('SignUp');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'MetaMask Demo'}</Text>
      <Button onPress={onSignUp} title="Sign Up" />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Onboarding;
