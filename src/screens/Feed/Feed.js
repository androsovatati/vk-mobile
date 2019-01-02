import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import { Text, View } from "react-native";
import Photo from "../Photo";

class News extends Component {
  render() {
    return (
      <View>
        <Text>News</Text>
      </View>
    );
  }
}

const Feed = createStackNavigator({
  News,
  Photo
});

export default Feed;
