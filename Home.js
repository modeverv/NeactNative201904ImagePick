import React from "react";
import { Text, TouchableOpacity, View,Image,FlatList } from "react-native";
import Firebase from "react-native-firebase";

export default class Home extends React.Component {
  state = {
    data: []
  };
  componentDidMount() {
    Firebase.database()
      .ref("images")
      .on("value", d => {
        console.log();
        this.setState({
          data: Object.values(d.toJSON()).map(({ downloadURL }) => downloadURL)
        });
      });
  }

    render() {
      console.log(this.state.data)
    return (
      <View style={{ flex: 1 }}>
        <Text>Home</Text>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
              <Image source={{ uri: item }} style={{ width:'100%',height:200 }} />
          )}
          keyExtractor={item => item}
        />
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
