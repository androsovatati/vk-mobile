import { types } from "mobx-state-tree";
import { Photo } from "./Photo";

const StoryPhoto = types.model({
  sizes: types.array(Photo)
});

const StoryVideo = types.model({
  files: types.map(types.frozen)
});

export const Story = types.model({
  id: types.number,
  ownerId: types.number,
  seen: types.maybe(types.number),
  photo: types.maybe(StoryPhoto)
  // video: types.maybe(StoryVideo)
});
