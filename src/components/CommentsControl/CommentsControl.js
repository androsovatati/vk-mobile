import React from "react";
import CommentOutlineIcon from "../Icons/CommentOutlineIcon";
import { Container, Count } from "./CommentsControl.styles";
import { GRAY } from "../../constants/colors";

const CommentsControl = props => (
  <Container>
    <CommentOutlineIcon color={GRAY} />
    {!!props.count && <Count>{props.count}</Count>}
  </Container>
);

export default CommentsControl;
