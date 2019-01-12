import React from "react";
import Panel from "../../../components/Panel";
import LikeControl from "../../../components/LikeControl";
import CommentsControl from "../../../components/CommentsControl";
import RepostControl from "../../../components/RepostControl";
import ViewControl from "../../../components/ViewControl";
import UserPlaceholder from "../../../components/UserPlaceholder";
import {
  Header,
  Source,
  SourceInfo,
  Name,
  Date,
  Avatar,
  TextContent,
  Footer,
  FooterItem
} from "./FeedPost.styles";

const FeedPost = props => {
  const source = props.item.source;
  return (
    <Panel>
      <Header>
        <Source>
          {!!source.photo50 ? (
            <Avatar source={{ uri: source.photo50 }} />
          ) : (
            <UserPlaceholder size={40} />
          )}
          <SourceInfo>
            <Name>
              {source.name || `${source.firstName} ${source.lastName}`}
            </Name>
            <Date>{props.item.date.toString()}</Date>
          </SourceInfo>
        </Source>
      </Header>
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
};

export default FeedPost;
