import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import React from "react";
import ColorChangerApp from "./ColorChangerApp";
import CounterApp from "./CounterApp";

export default function App() {
  return(
    <>
      <ColorChangerApp />;
  <CounterApp />

  </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
