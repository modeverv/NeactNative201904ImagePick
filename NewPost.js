/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Firebase from "react-native-firebase";
import ImagePicker from "react-native-image-picker";

// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
  title: "Select"
  /*
  customButtons: [{ name: "fb", title: "Choose Photo from Device" }],
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
  */
};

type Props = {};
export default class App extends Component<Props> {
  state = {};

  openPicker = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          uri: source
        });
      }
    });
  };

  upload = () => {
    console.log(this.state.uri.uri);
    Firebase.storage()
      .ref("images/" + new Date().getTime())
      .putFile(this.state.uri.uri, {
        contentType: "image/jpeg"
      })
      .then(({ downloadURL }) => {
        Firebase.database()
          .ref("images/" + new Date().getTime())
          .set({ downloadURL });
      })
      .then(() => alert("uploaded!"))
      .catch(e => {
        console.log(e);
        alert("Error");
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={this.state.uri} />
        <TouchableOpacity onPress={this.openPicker} style={styles.button}>
          <Text>pick</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.upload} style={styles.button}>
          <Text>send</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  image: {
    width: "100%",
    height: 200,
    backgroundColor: "#EEE"
  },
  button: {
    margin: 20
  }
});
