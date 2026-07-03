import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Switch } from 'react-native-paper';

type GenderSwitchProps = {
  isFemale: boolean;
  onValueChange: (isFemale: boolean) => void;
};

const GenderSwitch = ({ isFemale, onValueChange }: GenderSwitchProps) => {
  return (
    <View>
      <Text style={styles.label}>Gender:</Text>
      <View style={styles.row}>
        <Text style={styles.option}>Male</Text>
        <Switch value={isFemale} onValueChange={onValueChange} />
        <Text style={styles.option}>Female</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  option: {
    fontSize: 16,
    marginHorizontal: 10,
  },
});

export default GenderSwitch;
