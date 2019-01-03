import React, { Component } from "react";
import { Container, Menu, Title, IconWrapper } from "./FeedHeader.styles";
import { TouchableOpacity } from "react-native";
import Header from "../../../components/Header";
import Icon from "react-native-vector-icons/FontAwesome5";

class FeedHeader extends Component {
  goToPhoto = () => {
    this.props.navigation.navigate("Photo");
  };

  render() {
    return (
      <Container>
        <TouchableOpacity onPress={this.goToPhoto}>
          <Icon name="camera" size={20} color="white" />
        </TouchableOpacity>
        <Menu>
          <Title>Новости</Title>
          <IconWrapper>
            <Icon name="chevron-down" size={15} color="white" regular />
          </IconWrapper>
        </Menu>
      </Container>
    );
  }
}

export default Header(FeedHeader);
