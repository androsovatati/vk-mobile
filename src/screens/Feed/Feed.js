import React, { Component } from "react";
import FeedHeader from "./FeedHeader";
import { Text, View } from "react-native";

class Feed extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <FeedHeader navigation={this.props.navigation} />
        <Text>News</Text>
      </View>
    );
  }
}

export default Feed;
