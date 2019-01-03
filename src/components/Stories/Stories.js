import React, { PureComponent } from "react";
import { Wrapper, StoriesList, StoriesItem } from "./Stories.styles";

class Stories extends PureComponent {
  render() {
    const arr = Array.from(Array(20)).map((_, index) => ({ key: index }));

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
