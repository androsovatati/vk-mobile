import React from "react";
import Panel from "../../../components/Panel";
import LikeControl from "../../../components/LikeControl";
import CommentsControl from "../../../components/CommentsControl";
import RepostControl from "../../../components/RepostControl";
import ViewControl from "../../../components/ViewControl";
import { TextContent, Footer, FooterItem } from "./FeedPost.styles";

const FeedPost = props => (
  <Panel>
    <TextContent>{props.item.text}</TextContent>
    <Footer>
      <FooterItem>
        <LikeControl {...props.item.likes} />
      </FooterItem>
      <FooterItem>
        <CommentsControl count={props.item.comments.count} />
      </FooterItem>
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
