import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
//import React, { useState, useEffect } from 'react';


import NavBar from './NavBar';
import Code from './Code';
import Package from './Package';


// function App() {
//   useEffect(() => {
//     fetchPackage();
//   }, []);
// }

// const fetchPakage = async () => {
//   const data = await fetch(
//     ""
//   );
//   const packages = await data.json();
// };


export default function Client() {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <Code />
      <Package />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flex: '1',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },

});