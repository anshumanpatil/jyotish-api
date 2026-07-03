import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

type NameInputProps = {
  value: string;
  onChangeText: (text: string) => void;
};

const NameInput = ({ value, onChangeText }: NameInputProps) => {
  return (
    <View>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        label="Name"
        mode="flat"
        
        style={styles.input}
        // placeholder="Name"
        placeholderTextColor="#999"
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderColor: '#4A90E2',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});

export default NameInput;
