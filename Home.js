import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Firebase from "react-native-firebase";

export default class Home extends React.Component {
    state = {
        data: [],
    }
  componentDidMount() {
    Firebase.database()
      .ref("images")
      .on("value", d => {
        console.log(d.toJSON());
      });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Home</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("NewPost")}
          style={{
            position: "absolute",
            right: 20,
            top: 20,
            width: 50,
            height: 50,
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightblue"
          }}
        >
          <Text>New</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
