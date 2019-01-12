import { types } from "mobx-state-tree";

export const Profile = types.model({
  id: types.number,
  firstName: types.maybe(types.string),
  lastName: types.maybe(types.string),
  photo50: types.maybe(types.string),
  photo100: types.maybe(types.string)
});
