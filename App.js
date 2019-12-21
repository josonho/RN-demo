import React, { Component } from 'react';
import { Image,
        StyleSheet, 
        View
} from 'react-native';
import { create } from 'react-test-renderer';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
        <View style={styles.page}>
            <Image source={pic} style={styles.img} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    page: {
        width: '100%',
        height: '100%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        width: 193,
        height: 110
    } 
})