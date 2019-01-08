import React, { Component } from "react";
import { Container, Menu, Title, IconWrapper } from "./FeedHeader.styles";
import { TouchableOpacity } from "react-native";
import Header from "../../../components/Header";
import StoryIcon from "../../../components/Icons/StoryIcon";
import DropdownIcon from "../../../components/Icons/DropdownIcon";

class FeedHeader extends Component {
  goToPhoto = () => {
    this.props.navigation.navigate("Photo");
  };

  render() {
    return (
      <Container>
        <TouchableOpacity onPress={this.goToPhoto}>
          <StoryIcon color="white" />
        </TouchableOpacity>
        <Menu>
          <Title>Новости</Title>
          <IconWrapper>
            <DropdownIcon width={18} height={18} color="white" />
          </IconWrapper>
        </Menu>
      </Container>
    );
  }
}

export default Header(FeedHeader);
