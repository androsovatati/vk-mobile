import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { InitialScreen } from "./Initial.styles";

export default class Initial extends Component {
  componentDidMount() {
    this.isLoggedIn();
  }

  isLoggedIn = async () => {
    const token = await AsyncStorage.getItem("accessToken");
    const nextScreen = token ? "Main" : "Login";
    this.props.navigation.navigate(nextScreen);
  };

  render() {
    return <InitialScreen />;
  }
}
