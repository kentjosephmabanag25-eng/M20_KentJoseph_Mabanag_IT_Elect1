import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import React from "react";
import ChatScreen from "./ChatScreen";
import CommentSection from "./CommentSection";

export default function App() {
  return(
    <>
      <ChatScreen />;
  <CommentSection />;
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
