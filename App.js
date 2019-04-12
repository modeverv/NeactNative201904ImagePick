/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import NewPost from "./NewPost";
import Home from "./Home";

export default createStackNavigator(
  {
    NewPost: {
      screen: NewPost,
      navigationOptions: {
        title: "NewPost"
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        title: "Home"
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);
