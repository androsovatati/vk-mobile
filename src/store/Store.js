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
    login: flow(function*() {
      try {
        const { accessToken, userId } = yield login();
        yield AsyncStorage.setItem("accessToken", accessToken);
        const a = yield AsyncStorage.getItem("accessToken");
        console.log("a", a);
        this.user.id = userId;
      } catch (e) {
        console.log(e);
      }
    }),
    getStories: flow(function*() {
      const stories = yield fetchStories();
      console.log(stories);
      self.stories = stories;
    }),
    login: flow(function*({ email, password }) {
      try {
        const response = yield fetch(
          "https://us-central1-mercdev-academy.cloudfunctions.net/login",
          {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ email, password })
          }
        );
        const parsedData = yield response.json();
        if (response.ok) {
          self.user = User.create(parsedData);
          return parsedData;
        }

        if (parsedData && parsedData.error) {
          return { error: Error.create({ message: parsedData.error }) };
        }

        let errorMessage = "";
        if (response.status >= 500) {
          errorMessage = "Server error. Try again";
        } else if (response.status >= 400 && response.status < 500) {
          errorMessage = "Application error";
        }
        return {
          error: Error.create({ message: errorMessage || "Unhandled error" })
        };
      } catch (error) {
        return { error: Error.create({ message: "Network error" }) };
      }
    })
  }))
  .create();

export default Store;
