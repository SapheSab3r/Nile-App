import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.NavBar}>
      

      <Text style = {styles.Header}>Nile</Text>

    </View>
  );
}

const styles = StyleSheet.create({
    NavBar: {
        top: 0,
        width: '100%',
        height: '10%',
        justifyContent: 'flex-start', 
        backgroundColor: '#0b409c',
    },
    Header:{
        margin: 10,
        fontSize: 35,
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between'
    }
});