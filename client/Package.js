import { StyleSheet, Text, View, Pressable, Alert, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import { EvilIcons } from '@expo/vector-icons';


export default function App() {

    const callOnPress = () => {
        Alert.alert('pressed')
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.packages}>

                <Text style={styles.header}>Packages Awaiting:</Text>

                <Pressable
                    style={({ pressed }) => [
                        { backgroundColor: pressed ? '#0b409c' : '#ffffff' },
                        styles.buttonHolder1,
                    ]}
                    onPress={callOnPress}
                >

                    <Text style={styles.buttonText}> Arrival</Text>

                </Pressable>

                <Pressable
                    style={({ pressed }) => [
                        { backgroundColor: pressed ? '#0b409c' : '#ffffff' },
                        styles.buttonHolder2,
                    ]}
                    onPress={callOnPress}>

                    <Text style={styles.buttonText}>Pick Up</Text>

                </Pressable>

            </View>


            {/*this is the search bar*/}
            <View style={styles.searchBar}>
                <EvilIcons name="search" size={30} style={styles.searchIcon} />
                <TextInput placeholder="Search" style={styles.searchText} />

            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    packages: {
        width: "100%",
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    header: {
        marginBottom: 25,
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

    buttonText: {
        fontSize: 20,

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
    }

});