import React from "react";
import { Text } from "react-native";
import Panel from "../../../components/Panel";
import LikeControl from "../../../components/LikeControl";
import { Footer } from "./FeedPost.styles";

const FeedPost = props => (
  <Panel>
    <Text>{props.item.text}</Text>
    <Footer>
      <LikeControl {...props.item.likes} />
    </Footer>
  </Panel>
);

export default FeedPost;
