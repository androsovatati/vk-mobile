import { types } from "mobx-state-tree";

export const Photo = types.model({
  width: types.number,
  height: types.number,
  url: types.string
});
