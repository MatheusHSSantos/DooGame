import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from '../games/2048/components/AssetExample';

// or any pure javascript modules available in npm


import GameController from "../games/2048/src/GameController";

export default function App() {
  return (
    <View style={styles.container}>
      <GameController />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee"
  }
});
