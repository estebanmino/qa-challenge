import React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Sign Up'}</Text>
      <Button title="Sign Up" />
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

export default SignUp;
