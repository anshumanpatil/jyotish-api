import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import DrawChart from '../components/drawChart';

const { width } = Dimensions.get('window');

const chartData: Record<number, { rashi: string; planets: string[] }> = {
  1: { rashi: '1', planets: ['Asc'] },
  2: { rashi: '2', planets: ['Mo'] },
  3: { rashi: '3', planets: [] },
  4: { rashi: '4', planets: ['Ma'] },
  5: { rashi: '5', planets: [] },
  6: { rashi: '6', planets: ['Sa', 'Ju'] },
  7: { rashi: '7', planets: ['Ketu'] },
  8: { rashi: '8', planets: [] },
  9: { rashi: '9', planets: ['Su', 'Me'] },
  10: { rashi: '10', planets: ['Ve'] },
  11: { rashi: '11', planets: [] },
  12: { rashi: '12', planets: ['Rahu'] },
};

export default function Chart() {
  return (
    <View style={styles.container}>
      <DrawChart chartData={chartData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
});