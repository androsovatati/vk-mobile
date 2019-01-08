import React, { Component } from "react";
import FeedHeader from "./FeedHeader";
import { Container } from "./Feed.styles";
import Stories from "../../components/Stories";
import NewPost from "../../components/NewPost";
import { fetchNewsFeed } from "../../api/newsfeed";
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
          renderItem={({ item }) => <Text>{item.text}</Text>}
          contentContainerStyle={{ alignSelf: "center" }}
        />
      </Container>
    );
  }
}

export default Feed;
