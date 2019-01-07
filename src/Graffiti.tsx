import React from "react";
import { Component } from 'react';
import { StyleSheet, Text, View } from "react-native";
import Radar from "react-native-radar";

export default class Graffiti extends Component {
    render() {
        Radar.setPlacesProvider("Facebook");
        Radar.getPermissionsStatus().then((status: string) => {
            if (status !== "GRANTED") {
                Radar.requestPermissions(true);
            }
        });
        Radar.startTracking({
            sync: 'possibleStateChanges',
            offline: 'replayStopped',
        });
        Radar.on('location', (result) => {
            console.log(result);
        });
        return (
            <View style={ styles.container }>
                <Text>Using absolute paths</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
