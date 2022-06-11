import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


import NavBar from './NavBar';
import Code from './Code';
import Package from './Package';


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