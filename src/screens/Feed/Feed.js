import React, { Component } from "react";
import Store from "../../store";
import FeedHeader from "./FeedHeader";
import { Container, FeedListHeader } from "./Feed.styles";
import Stories from "./Stories";
import NewPost from "./NewPost";
import FeedPost from "./FeedPost";
import { Text, View, FlatList } from "react-native";
import { observable, computed } from "mobx";
import { observer } from "mobx-react";

@observer
class Feed extends Component {
  constructor() {
    super();
  }

  @observable isFetching = false;

  componentDidMount() {
    this.refresh();
  }

  @computed
  get news() {
    console.log("d", Store.postsData.slice());
    return Store.postsData.map((item, i) => ({ ...item, key: `${i}` }));
  }

  refresh = async () => {
    this.isFetching = true;
    await Store.getNewsFeed();
    this.isFetching = false;
  };

  fetchMore = () => {
    console.log("more");
  };

  render() {
    return (
      <Container>
        <FeedHeader navigation={this.props.navigation} />
        <FlatList
          data={this.news}
          ListHeaderComponent={
            <FeedListHeader>
              <NewPost />
              <Stories />
            </FeedListHeader>
          }
          renderItem={({ item }) => <FeedPost item={item} />}
          refreshing={this.isFetching}
          onRefresh={this.refresh}
          onEndReached={this.fetchMore}
        />
      </Container>
    );
  }
}

export default Feed;
