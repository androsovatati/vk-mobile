import { types, flow } from "mobx-state-tree";
import { AsyncStorage } from "react-native";
import { login } from "../api/login";
import { fetchStories } from "../api/stories";

const User = types.model({
  id: types.number
});

const Photo = types.model({
  width: types.number,
  height: types.number,
  url: types.string
});

const StoryPhoto = types.model({
  sizes: types.array(Photo)
});

const StoryVideo = types.model({
  files: types.map(types.frozen)
});

const Story = types.model({
  id: types.number,
  ownerId: types.number,
  seen: types.maybe(types.number),
  photo: types.maybe(StoryPhoto)
  // video: types.maybe(StoryVideo)
});

const BaseProfile = types.model({
  id: types.number,
  firstName: types.string,
  lastName: types.string
});

const BaseGroup = types.model({
  id: types.number,
  name: types.string,
  photo50: types.string,
  photo100: types.string
});

const Store = types
  .model({
    user: types.maybe(User),
    stories: types.array(types.array(Story)),
    profiles: types.array(BaseProfile),
    groups: types.array(BaseGroup)
  })
  .actions(self => ({
    login: flow(function*(params) {
      const { accessToken, userId } = yield login(params);
      yield AsyncStorage.setItem("accessToken", accessToken);
      self.user = { id: userId };
      return userId;
    }),
    getStories: flow(function*() {
      const stories = yield fetchStories();
      console.log(stories);
      self.stories = stories.items;
      self.profiles = stories.profiles;
      self.groups = stories.groups;
    })
  }))
  .views(self => ({
    get storiesPreview() {
      if (!self.stories) {
        return [];
      }
      return self.stories.map(list => {
        const ownerId = list[0].ownerId;
        const seen = list.every(item => item.seen);
        if (ownerId > 0) {
          return {
            ...self.profiles.find(profile => profile.id === ownerId),
            seen
          };
        }
        return { ...self.groups.find(group => group.id === -ownerId), seen };
      });
    }
  }))
  .create();

export default Store;
