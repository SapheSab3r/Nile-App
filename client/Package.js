import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Keyboard, TextInput, FlatList } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default class Package extends Component {
    constructor(props) {
        super(props);
        this.state = { colorId: 0 };
    }

    changeColor = (id) => {
        this.setState({ colorId: id });
    }



    render() {
        //testing data 
        const list = [
            { id: '1', name: 'James', date: '3/9/2022', code: 'RA38990125US' },
            { id: '2', name: 'Ortiz', date: '3/10/2022', code: 'RA38990125US'},
            { id: '3', name: 'Mile', date: '3/9/2022' , code: 'RA38990125US'},
            { id: '4', name: 'Thomas', date: '3/9/2022' , code: 'RA38990125US'},
            { id: '5', name: 'Alice', date: '3/9/2022' , code: 'RA38990125US'},
            { id: '6', name: 'Mallory', date: '8/9/2022' , code: 'RA38990125US'}
          ];


        return (
            <View style={styles.mainContainer} >
                <StatusBar style='auto' />

                <View style={styles.packages}>

                    <Text style={styles.header}>Packages Awaiting:</Text>

                    <TouchableOpacity style={this.state.colorId === 1 ? styles.pressed : styles.buttonHolder1}
                        onPress={() => this.changeColor(1)}>
                        <Text style={this.state.colorId === 1 ? styles.textPressed : styles.buttonText}> Arrival</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={this.state.colorId === 2 ? styles.pressed2 : styles.buttonHolder2}
                        onPress={() => this.changeColor(2)}>
                        <Text style={this.state.colorId === 2 ? styles.textPressed : styles.buttonText}>Pick Up</Text>
                    </TouchableOpacity>

                </View>
                {/*this is the search bar*/}
                <View style={styles.searchBar} >
                    <EvilIcons name="search" size={30} style={styles.searchIcon} />
                    <TextInput placeholder="Search" style={styles.searchText} /> 
                </View>
                

                {/*listing all the deliveries*/}
                <View style={styles.container}>
                    <FlatList
                    data={list}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.listItem}>
                        <Text style={styles.listItemText}>{item.name}</Text>
                        <Text style={styles.listItemDate}>{item.date}</Text>
                        <Text style={styles.listItemCode}>{item.code}</Text>
                        </View>
                    )}/>

                </View>


            </View >

        );
    }
}

const styles = StyleSheet.create({
    packages: {
        width: "100%",
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    header: {
        marginBottom: 20,
        fontSize: 25,
        paddingLeft: 15,
    },

    buttonHolder1: {
        width: '45%',
        height: '40%',
        padding: 5,
        marginLeft: 12,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#0b409c',
        borderRadius: '20%',
    },

    pressed: {
        width: '45%',
        height: '40%',
        padding: 5,
        marginLeft: 12,
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: '20%',
        borderColor: '#0b409c',
        backgroundColor: '#0b409c',
    },

    pressed2: {
        width: '45%',
        height: '40%',
        padding: 5,
        marginRight: 12,
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: '20%',
        borderColor: '#0b409c',
        backgroundColor: '#0b409c',
    },

    buttonText: {
        color: '#1648a0',
        fontSize: 20,
    },

    textPressed: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
    },

    buttonHolder2: {
        width: '45%',
        height: '40%',
        padding: 5,
        marginRight: 12,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#0b409c',
        borderRadius: '20%',
    },

    searchBar: {
        margin: 10,
        height: 40,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#387dd9',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
    },

    searchIcon: {
        padding: 5,
    },

    searchText: {
        padding: 2,
        fontSize: 20,
    },

    container: {
        flex: 1,
        alignContent: 'center',
        marginLeft: 8,
        marginRight: 8,
      },
    
      listItem: {
        width: '100%',
        height: 90,
        alignItems: 'flexstart',
        backgroundColor: '#feffcd',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 15,
        marginTop: 10,
      },
    
      listItemText: {
        margin: 10,
        fontSize: 22,
        fontWeight: 'bold',
      },
    
      listItemDate: {
        margin: 10,
        fontSize: 18,
        fontWeight: 'bold',
      },
    
      listItemCode:{
        position: 'absolute',
        top: 35,
        margin: 15,
        fontSize: 24,
      }

});