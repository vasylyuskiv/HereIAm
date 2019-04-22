import React, { Component } from 'react';
import MapView, {Marker} from 'react-native-maps';
import styles from "../../styles";
import {Text, View} from "react-native";


const region = {
    latitude: 49.8382600,
    longitude: 24.0232400,
    latitudeDelta: 0.0522,
    longitudeDelta: 0.0421,
    zoom: 13,
};
export class MapScreen extends Component {
    constructor(props) {
        super(props);

        this.state = { markers: [ 49.8382600, 24.0232400]
        };
        // this.handlePress = this.handlePress.bind(this);
    }
        // handlePress (e) {
        //     this.setState ({
        //     markers: [
        //          ...this.state.markers,
        //          {
        //              coordinate: e.nativeEvent.coordinate,
        //          }
        //  ]})}


        render() {


    return (
        <View style={styles.container}>
        <MapView style={styles.map}
            initialRegion={region}
                 onPress={ this.handlePress}
        >
           {/*{this.state.markers.map((marker) => {*/}
           {/* return <Marker*/}
            {/*    {...marker}*/}
            {/*    image={require('../assets/Artwork/Logo.png')}*/}
            {/*/> })}*/}

            <MapView.Marker
            coordinate={ { latitude: 49.8382600,
                         longitude: 24.0232400,}
            }
            />

            <Text style={styles.instructions}>Log Out</Text>
        </MapView>
        </View>

    );
  }
}