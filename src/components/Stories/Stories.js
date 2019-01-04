import React, { Component } from "react";
import { Wrapper, StoriesList, StoriesItem } from "./Stories.styles";
import Store from "../../store";
import { observer } from "mobx-react";
import { observable, computed } from "mobx";

@observer
class Stories extends Component {
  componentDidMount() {
    Store.getStories();
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
          data={this.storiesOwners.map((item, i) => ({ ...item, key: `${i}` }))}
          renderItem={() => <StoriesItem />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignSelf: "center" }}
        />
      </Wrapper>
    );
  }
}

export default Stories;
