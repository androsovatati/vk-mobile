import { types, flow } from "mobx-state-tree";
import { AsyncStorage } from "react-native";
import { Profile } from "./models/Profile";
import { Group } from "./models/Group";
import { Story } from "./models/Story";
import { Post } from "./models/Post";
import { login } from "../api/login";
import { fetchStories } from "../api/stories";
import { fetchUsers } from "../api/users";
import { fetchNewsFeed } from "../api/newsfeed";

const Store = types
  .model({
    user: types.maybe(Profile),
    stories: types.array(types.array(Story)),
    newsfeed: types.array(Post),
    profiles: types.map(Profile),
    groups: types.map(Group)
  })
  .actions(self => ({
    login: flow(function*(params) {
      const { accessToken, userId } = yield login(params);
      yield AsyncStorage.setItem("accessToken", accessToken);
      const users = yield fetchUsers({
        userIds: `${userId}`,
        fields: "photo_50,photo_100"
      });
      self.user = users[0];
      return userId;
    }),
    getStories: flow(function*() {
      const stories = yield fetchStories();
      self.stories = stories.items;
      self.setProfiles(stories.profiles);
      self.setGroups(stories.groups);
    }),
    getNewsFeed: flow(function*() {
      const newsfeed = yield fetchNewsFeed();
      self.newsfeed = newsfeed.items;
      self.setProfiles(newsfeed.profiles);
      self.setGroups(newsfeed.groups);
    }),
    setProfiles: flow(function*(profiles) {
      const profilesWithoutPhoto = [];
      profiles.forEach(profile => {
        if (!profile.photo100) {
          profilesWithoutPhoto.push(profile.id);
        }
        self.profiles.set(profile.id, profile);
      });
      const extendedProfiles = yield fetchUsers({
        userIds: profilesWithoutPhoto.join(","),
        fields: "photo_50,photo_100"
      });
      extendedProfiles.forEach(profile => {
        self.profiles.set(profile.id, profile);
      });
    }),
    setGroups: groups => {
      groups.forEach(group => {
        self.groups.set(group.id, group);
      });
    }
  }))
  .views(self => ({
    get storiesPreview() {
      if (!self.stories) {
        return [];
      }
      return self.stories.map(list => {
        const ownerId = list[0].ownerId;
        const seen = list.every(item => item.seen);
        return ownerId > 0
          ? { ...self.profiles.get(ownerId), seen }
          : { ...self.groups.get(-ownerId), seen };
      });
    },
    get postsData() {
      return self.newsfeed.map(post => {
        return post.sourceId > 0
          ? { ...post, source: self.profiles.get(post.sourceId) }
          : { ...post, source: self.groups.get(-post.sourceId) };
      });
    }
  }))
  .create();

export default Store;
