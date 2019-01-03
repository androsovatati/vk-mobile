import React, { Component } from "react";
import FeedHeader from "./FeedHeader";
import { Container } from "./Feed.styles";
import Stories from "../../components/Stories";
import { Text, View } from "react-native";

class Feed extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <FeedHeader navigation={this.props.navigation} />
        <Stories />
        <Text>News</Text>
      </Container>
    );
  }
}

export default Feed;
