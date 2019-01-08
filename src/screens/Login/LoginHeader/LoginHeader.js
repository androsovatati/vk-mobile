import React, { Component } from "react";
import {
  Container,
  Logo,
  LogoutButton,
  LogoutButtonText
} from "./LoginHeader.styles";
import { DARK_BLUE } from "../../../constants/colors";
import Header from "../../../components/Header/Header";
import VkIcon from "../../../components/Icons/VkIcon";

class FeedHeader extends Component {
  goToPhoto = () => {
    this.props.navigation.navigate("Photo");
  };

  render() {
    return (
      <Container>
        <Logo>
          <VkIcon width={40} height={40} color={DARK_BLUE} />
        </Logo>
        <LogoutButton
          disabled={this.props.disabledLogin}
          onPress={this.props.onLogin}
        >
          <LogoutButtonText>Войти</LogoutButtonText>
        </LogoutButton>
      </Container>
    );
  }
}

export default Header(FeedHeader);
