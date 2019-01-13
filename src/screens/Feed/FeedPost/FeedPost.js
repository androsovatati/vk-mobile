import React, { PureComponent } from "react";
import moment from "moment";
import "moment/locale/ru";
import { ActionSheetIOS } from "react-native";
import ActionSheet from "react-native-actionsheet";
import Panel from "../../../components/Panel";
import LikeControl from "../../../components/LikeControl";
import CommentsControl from "../../../components/CommentsControl";
import RepostControl from "../../../components/RepostControl";
import ViewControl from "../../../components/ViewControl";
import UserPlaceholder from "../../../components/UserPlaceholder";
import MoreHorizontalIcon from "../../../components/Icons/MoreHorizontalIcon";
import {
  Header,
  Source,
  SourceInfo,
  Name,
  Date,
  Avatar,
  More,
  TextContent,
  Footer,
  FooterItem
} from "./FeedPost.styles";
import { GRAY } from "../../../constants/colors";

const BUTTONS = [
  "Сохранить в закладках",
  "Уведомлять о новых записях",
  "Скопировать ссылку",
  "Это не интересно",
  "Пожаловаться",
  "Отмена"
];
const CANCEL_INDEX = 5;

class FeedPost extends PureComponent {
  componentDidMount() {
    moment.locale("ru");
  }

  showActionSheet = () => {
    this.ActionSheet.show();
  };

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
              <Name numberOfLines={1}>
                {source.name || `${source.firstName} ${source.lastName}`}
              </Name>
              <Date>{date}</Date>
            </SourceInfo>
            <More onPress={this.showActionSheet}>
              <MoreHorizontalIcon color={GRAY} />
            </More>
          </Source>
        </Header>
        <ActionSheet
          ref={o => (this.ActionSheet = o)}
          options={BUTTONS}
          cancelButtonIndex={CANCEL_INDEX}
        />
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
