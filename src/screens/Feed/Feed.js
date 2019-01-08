import React, { Component } from "react";
import FeedHeader from "./FeedHeader";
import { Container } from "./Feed.styles";
import Stories from "./Stories";
import NewPost from "./NewPost";
import { fetchNewsFeed } from "../../api/newsfeed";
import FeedPost from "./FeedPost";
import { Text, View, FlatList } from "react-native";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
class Feed extends Component {
  constructor() {
    super();
  }

  @observable news = [];

  getNewsFeed = async () => {
    const res = await fetchNewsFeed();
    this.news = res.items.map((item, i) => ({ ...item, key: `${i}` }));
    console.log(res);
  };

  componentDidMount() {
    this.getNewsFeed();
  }

  render() {
    return (
      <Container>
        <FeedHeader navigation={this.props.navigation} />
        <NewPost />
        <Stories />
        <FlatList
          data={this.news}
          renderItem={({ item }) => <FeedPost item={item} />}
          contentContainerStyle={{ alignSelf: "center" }}
        />
      </Container>
    );
  }
}

export default Feed;
