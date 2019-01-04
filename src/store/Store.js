import { types, flow } from "mobx-state-tree";
import { AsyncStorage } from "react-native";
import { login } from "../api/login";
import { fetchStories } from "../api/stories";

const User = types.model({
  id: types.number
});

const Story = types.model({
  id: types.number,
  ownerId: types.number
});

const Error = types.model({
  message: types.string
});

const Store = types
  .model({
    user: types.maybe(User),
    stories: types.array(types.array(Story))
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
      self.stories = stories;
    })
  }))
  .create();

export default Store;
