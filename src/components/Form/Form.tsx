import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Form = ({children}: any) => {
  return <View style={styles.form}>{children}</View>;
};

export default Form;

const styles = StyleSheet.create({
  form: {
    borderWidth: 1,
    borderColor: '#00000033',
    borderRadius: 4,
    padding: 8,
    gap: 10,
    position: 'relative',
    marginBottom: 20,
  },
});
