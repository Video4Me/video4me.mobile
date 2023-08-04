import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

interface FormProps {
  placeholder: string;
  onChange?: (text: string) => void;
  value?: string;
  disabled: boolean;
}

const InputForm = ({placeholder, onChange, value, disabled}: FormProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChange}
      value={value}
      editable={!disabled}
    />
  );
};

export default InputForm;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#66BAF20D',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#66BAF2',
    color: '#333333',
    fontSize: 14,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
});
