import { types, flow, detach } from "mobx-state-tree";
import { AsyncStorage } from "react-native";
import { Profile } from "./models/Profile";
import { Group } from "./models/Group";
import { Story } from "./models/Story";
import { Newsfeed } from "./models/Newsfeed";
import { login } from "../api/login";
import { fetchStories } from "../api/stories";
import { fetchUsers } from "../api/users";
import { fetchNewsFeed } from "../api/newsfeed";

const Store = types
  .model({
    user: types.maybe(Profile),
    stories: types.array(types.array(Story)),
    newsfeed: types.maybe(Newsfeed),
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
      self.newsfeed = {
        items: newsfeed.items,
        newItems: [],
        nextFrom: newsfeed.nextFrom
      };
      self.setProfiles(newsfeed.profiles);
      self.setGroups(newsfeed.groups);
    }),
    getMoreNewsFeed: flow(function*() {
      const newsfeed = yield fetchNewsFeed({
        startFrom: self.newsfeed.nextFrom
      });
      self.newsfeed.items.push(...newsfeed.items);
      self.newsfeed.nextFrom = newsfeed.nextFrom;
      self.setProfiles(newsfeed.profiles);
      self.setGroups(newsfeed.groups);
    }),
    getFreshNewsFeed: flow(function*() {
      const startTime = self.newsfeed.items[0].date;
      const newsfeed = yield fetchNewsFeed({ startTime });
      if (newsfeed.items.length > 1) {
        self.newsfeed.newItems = newsfeed.items.slice(0, -1);
        self.setProfiles(newsfeed.profiles);
        self.setGroups(newsfeed.groups);
      }
    }),
    updateNewsFeed() {
      const newItems = [];
      self.newsfeed.newItems.forEach(item => newItems.push(detach(item)));
      self.newsfeed.items.unshift(...newItems);
    },
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
      if (!self.newsfeed) {
        return [];
      }
      return self.newsfeed.items.map(post => {
        return post.sourceId > 0
          ? { ...post, source: self.profiles.get(post.sourceId) }
          : { ...post, source: self.groups.get(-post.sourceId) };
      });
    },
    get isNewPosts() {
      return self.newsfeed && self.newsfeed.newItems.length;
    }
  }))
  .create();

export default Store;
