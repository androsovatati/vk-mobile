import React from "react";
import ViewIcon from "../Icons/ViewIcon";
import { Container, Count } from "./ViewControl.styles";
import { GRAY } from "../../constants/colors";

const ViewControl = props => (
  <Container>
    <ViewIcon color={GRAY} />
    {!!props.count && (
      <Count>
        {props.count < 1000
          ? props.count
          : `${(props.count / 1000).toFixed(1)}K`}
      </Count>
    )}
  </Container>
);

export default ViewControl;
