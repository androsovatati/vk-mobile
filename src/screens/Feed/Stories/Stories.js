import React, { Component } from "react";
import { Wrapper, StoriesList } from "./Stories.styles";
import Store from "../../../store";
import StoriesItem from "./StoriesItem";
import { View, Text } from "react-native";
import { observer } from "mobx-react";
import { AsyncStorage } from "react-native";
import { observable, computed } from "mobx";

@observer
class Stories extends Component {
  componentDidMount() {
    Store.getStories();
    // AsyncStorage.removeItem("accessToken");
  }

  @computed
  get storiesList() {
    return Store.storiesPreview.map((item, i) => ({
      ...item,
      key: `${i}`
    }));
  }

  render() {
    return (
      <Wrapper>
        <StoriesList
          horizontal={true}
          data={this.storiesList}
          renderItem={({ item }) => (
            <StoriesItem
              image={item.photo100}
              text={item.name || item.firstName}
              seen={item.seen}
            />
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignSelf: "center" }}
        />
      </Wrapper>
    );
  }
}

export default Stories;
