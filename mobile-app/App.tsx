import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import SavedKundalis from './pages/SavedKundalis';
import NewKundli from './pages/NewKundli';
import { StyleSheet } from 'react-native';
import { MD3LightTheme, PaperProvider, Text, Button, Card } from 'react-native-paper';

// You can customize your theme using Material Design 3 (MD3) guidelines
const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#6200ee',
    secondary: '#03dac6',
  },
};

const renderScene = SceneMap({
  saved: SavedKundalis,
  new: NewKundli,
});

const routes = [
  { key: 'saved', title: 'Saved Kundali`s' },
  { key: 'new', title: 'New Kundli' },
];

export default function App() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  return (

    <PaperProvider theme={theme}>
      <TabView
        style={{ marginTop: 50 }}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </PaperProvider>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    width: '100%',
    maxWidth: 400,
  },
});