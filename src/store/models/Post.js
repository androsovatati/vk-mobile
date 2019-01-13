import { types } from "mobx-state-tree";

const Comments = types.model({
  count: types.number,
  canPost: types.number
});

const Likes = types.model({
  count: types.number,
  userLikes: types.number,
  canLike: types.number,
  canPublish: types.number
});

const Reposts = types.model({
  count: types.number,
  userReposted: types.number
});

const Views = types.model({
  count: types.number
});

const Attachment = types.model({
  type: types.string
});

export const Post = types.model({
  type: types.string,
  sourceId: types.number,
  date: types.number,
  postId: types.number,
  postType: types.string,
  text: types.string,
  comments: Comments,
  likes: Likes,
  reposts: Reposts,
  views: types.maybe(Views),
  attachments: types.array(Attachment)
});
