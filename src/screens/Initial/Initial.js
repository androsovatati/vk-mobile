import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { InitialScreen } from "./Initial.styles";
import { DARK_BLUE } from "../../constants/colors";
import Icon from "react-native-vector-icons/FontAwesome5";

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
    return (
      <InitialScreen>
        <Icon name="vk" size={100} color={DARK_BLUE} />
      </InitialScreen>
    );
  }
}
