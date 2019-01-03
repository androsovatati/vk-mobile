import React, { Component } from "react";
import {
  Container,
  Logo,
  LogoutButton,
  LogoutButtonText
} from "./LoginHeader.styles";
import { DARK_BLUE } from "../../../constants/colors";
import Header from "../../../components/Header/Header";
import Icon from "react-native-vector-icons/FontAwesome5";

class FeedHeader extends Component {
  goToPhoto = () => {
    this.props.navigation.navigate("Photo");
  };

  render() {
    return (
      <Container>
        <Logo>
          <Icon name="vk" size={40} color={DARK_BLUE} />
        </Logo>
        <LogoutButton disabled={true}>
          <LogoutButtonText>Войти</LogoutButtonText>
        </LogoutButton>
      </Container>
    );
  }
}

export default Header(FeedHeader);
