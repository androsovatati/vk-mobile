import React from "react";
import LikeIcon from "../../components/Icons/LikeIcon";
import LikeOutlineIcon from "../../components/Icons/LikeOutlineIcon";
import { Container, Count } from "./LikeControl.styles";
import { GRAY, RED } from "../../constants/colors";

const LikeControl = props => (
  <Container>
    {props.userLikes ? (
      <LikeIcon color={RED} />
    ) : (
      <LikeOutlineIcon color={GRAY} />
    )}
    <Count active={props.userLikes}>{props.count}</Count>
  </Container>
);

export default LikeControl;
