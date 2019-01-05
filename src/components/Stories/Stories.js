import React, { Component } from "react";
import { Wrapper, StoriesList } from "./Stories.styles";
import Store from "../../store";
import StoriesItem from "./StoriesItem";
import { View, Text } from "react-native";
import { observer } from "mobx-react";
import { AsyncStorage } from "react-native";
import { observable, computed } from "mobx";

@observer
class Stories extends Component {
  test = async () => {
    const resp = await Store.getStories();
    console.log("stories", Store.storiesPreview.slice());
  };
  componentDidMount() {
    this.test();
    // Store.getStories();
    // AsyncStorage.removeItem("accessToken");
  }

  get storiesOwners() {
    return Store.stories.map(userStories => ({
      ...userStories[0]
    }));
  }

  render() {
    return (
      <Wrapper>
        <StoriesList
          horizontal={true}
          data={Store.storiesPreview.map((item, i) => ({
            ...item,
            key: `${i}`
          }))}
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
