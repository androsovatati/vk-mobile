import React from "react";
import UserIcon from "../../components/Icons/UserIcon";
import { DARK_BLUE } from "../../constants/colors";
import { Container, User } from "./UserPlaceholder.styled";

const UserPlaceholder = props => {
  const iconSize = props.size / 2;
  return (
    <Container {...props}>
      <User iconSize={iconSize}>
        <UserIcon width={iconSize} height={iconSize} color={DARK_BLUE} />
      </User>
    </Container>
  );
};

export default UserPlaceholder;
