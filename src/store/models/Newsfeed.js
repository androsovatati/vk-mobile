import { types } from "mobx-state-tree";
import { Post } from "./Post";

export const Newsfeed = types.model({
  items: types.array(Post),
  nextFrom: types.maybe(types.string)
});
