import React from "react";
import { Text } from "react-native";
import Panel from "../../../components/Panel";
import LikeControl from "../../../components/LikeControl";
import CommentsControl from "../../../components/CommentsControl";
import RepostControl from "../../../components/RepostControl";
import ViewControl from "../../../components/ViewControl";
import { Footer, FooterItem } from "./FeedPost.styles";

const FeedPost = props => (
  <Panel>
    <Text>{props.item.text}</Text>
    <Footer>
      {!!props.item.likes.canLike && (
        <FooterItem>
          <LikeControl {...props.item.likes} />
        </FooterItem>
      )}
      {!!props.item.comments.canPost && (
        <FooterItem>
          <CommentsControl count={props.item.comments.count} />
        </FooterItem>
      )}
      <FooterItem>
        <RepostControl {...props.item.reposts} />
      </FooterItem>
      {!!props.item.views && (
        <FooterItem last={true}>
          <ViewControl count={props.item.views.count} />
        </FooterItem>
      )}
    </Footer>
  </Panel>
);

export default FeedPost;
