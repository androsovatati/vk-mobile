import React from "react";
import UpIcon from "../../../components/Icons/UpIcon";
import { Button, Content, Text } from "./FreshNewsButton.styles";

const FreshNewsButton = props => (
  <Button onPress={props.onPress}>
    <Content>
      <UpIcon color="#fff" />
      <Text>{props.children}</Text>
    </Content>
  </Button>
);

export default FreshNewsButton;
