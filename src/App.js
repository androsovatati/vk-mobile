import React, { Component } from "react";
import { Text, View } from "react-native";
import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import Initial from "./screens/Initial";
import Login from "./screens/Login";
import Feed from "./screens/Feed";
import Search from "./screens/Search";
import Messages from "./screens/Messages";
import Notifications from "./screens/Notifications";
import Profile from "./screens/Profile";

const Main = createBottomTabNavigator({
  Feed,
  Search,
  Messages,
  Notifications,
  Profile
});

const AppNavigator = createSwitchNavigator(
  {
    Initial,
    Login,
    Main
  },
  {
    initialRouteName: "Main"
  }
);

const App = createAppContainer(AppNavigator);
export default App;
