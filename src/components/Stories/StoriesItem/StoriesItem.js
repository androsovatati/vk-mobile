import React from "react";
import { Container, ImageWrapper, Image, Text } from "./StoriesItem.styled";
import UserPlaceholder from "../../../components/UserPlaceholder";

const StoriesItem = props => (
  <Container>
    <ImageWrapper accent={!props.seen}>
      {props.image ? (
        <Image source={{ uri: props.image }} />
      ) : (
        <UserPlaceholder size={60} />
      )}
    </ImageWrapper>
    <Text numberOfLines={1} accent={!props.seen}>
      {props.text}
    </Text>
  </Container>
);

export default StoriesItem;
