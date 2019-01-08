import React from "react";
import ShareIcon from "../Icons/ShareIcon";
import ShareOutlineIcon from "../Icons/ShareOutlineIcon";
import { Container, Count } from "./RepostControl.styles";
import { GRAY, RED } from "../../constants/colors";

const RepostControl = props => (
  <Container>
    {props.userReposted ? (
      <ShareIcon color={RED} />
    ) : (
      <ShareOutlineIcon color={GRAY} />
    )}
    {!!props.count && <Count active={props.userReposted}>{props.count}</Count>}
  </Container>
);

export default RepostControl;
