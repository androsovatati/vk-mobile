import React, { PureComponent } from "react";
import moment from "moment";
import "moment/locale/ru";
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

class FeedPost extends PureComponent {
  componentDidMount() {
    moment.locale("ru");
  }

  render() {
    const { item } = this.props;
    const source = item.source;
    const date = moment.unix(item.date).fromNow();
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
              <Date>{date}</Date>
            </SourceInfo>
          </Source>
        </Header>
        <TextContent>{item.text}</TextContent>
        <Footer>
          <FooterItem>
            <LikeControl {...item.likes} />
          </FooterItem>
          <FooterItem>
            <CommentsControl count={item.comments.count} />
          </FooterItem>
          <FooterItem>
            <RepostControl {...item.reposts} />
          </FooterItem>
          {!!item.views && (
            <FooterItem last={true}>
              <ViewControl count={item.views.count} />
            </FooterItem>
          )}
        </Footer>
      </Panel>
    );
  }
}

export default FeedPost;
