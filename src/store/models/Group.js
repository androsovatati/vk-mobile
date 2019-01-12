import { types } from "mobx-state-tree";

export const Group = types.model({
  id: types.number,
  name: types.string,
  photo50: types.string,
  photo100: types.string
});
