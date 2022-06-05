// expo start
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from "react";
import Client from "./client/Client"

export default function App() {
  const [list, setList] = useState(true);
  const [card, setCard] = useState(false);
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/players/users")
      .then((response) => response.json())
      .then((responseJson) => {
        setPlayers(responseJson.data);
      });
  }, []);

  let showCard = (id) => {
    fetch(`http://localhost:3001/players/${id}`)
      .then((response) => response.json())
      .then((responseJson) => {
        setPlayer(responseJson.data);
        setList(false);
        setCard(true);
      });
  };

  let showList = () => {
    setCard(false);
    setList(true);
  };


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Client></Client>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



