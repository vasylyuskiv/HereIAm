import React, { Component } from 'react';
import MapView from 'react-native-maps';
import styles from "../../styles";
import {Text, View} from "react-native";

const region = {
    latitude: 49.8382600,
    longitude: 24.0232400,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
};
export class MapScreen extends Component {


  render() {


    return (
        <View style={styles.container}>
        <MapView style={styles.map}
            initialRegion={region}
        >

            <Text style={styles.instructions}>Log Out</Text>
        </MapView>
        </View>

    );
  }
}