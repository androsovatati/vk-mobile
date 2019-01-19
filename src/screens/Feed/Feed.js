import React, { Component } from "react";
import Store from "../../store";
import FeedHeader from "./FeedHeader";
import { Container, FeedListHeader } from "./Feed.styles";
import Stories from "./Stories";
import NewPost from "./NewPost";
import FeedPost from "./FeedPost";
import { FlatList } from "react-native";
import { observable, computed } from "mobx";
import { observer } from "mobx-react";
import FreshNewsButton from "./FreshNewsButton";

@observer
class Feed extends Component {
  constructor() {
    super();
  }

  @observable isFetching = false;
  @observable timer = null;

  componentDidMount() {
    this.refresh();
    this.checkNewPosts();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  @computed
  get news() {
    return Store.postsData.map((item, i) => ({ ...item, key: `${i}` }));
  }

  checkNewPosts = () => {
    this.timer = setTimeout(() => {
      Store.getFreshNewsFeed();
      this.checkNewPosts();
    }, 5000);
  };

  addNewPosts = () => {
    Store.updateNewsFeed();
    this.refs.list.scrollToOffset({ offset: 0, animated: true });
  };

  refresh = async () => {
    this.isFetching = true;
    await Store.getNewsFeed();
    this.isFetching = false;
  };

  fetchMore = () => {
    Store.getMoreNewsFeed();
  };

  render() {
    return (
      <Container>
        <FeedHeader navigation={this.props.navigation} />
        <FlatList
          ref="list"
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
        {!!Store.isNewPosts && (
          <FreshNewsButton onPress={this.addNewPosts}>
            Свежие новости
          </FreshNewsButton>
        )}
      </Container>
    );
  }
}

export default Feed;
