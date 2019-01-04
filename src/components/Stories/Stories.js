import React, { Component } from "react";
import { Wrapper, StoriesList, StoriesItem } from "./Stories.styles";
import { getStories } from "../../api/stories";

class Stories extends Component {
  render() {
    const arr = Array.from(Array(20)).map((_, index) => ({
      key: index.toString()
    }));

    return (
      <Wrapper>
        <StoriesList
          horizontal={true}
          data={arr}
          renderItem={() => <StoriesItem />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignSelf: "center" }}
        />
      </Wrapper>
    );
  }
}

export default Stories;
