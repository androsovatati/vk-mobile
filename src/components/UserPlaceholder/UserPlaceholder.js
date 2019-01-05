import React from "react";
import { Container, User } from "./UserPlaceholder.styled";

const UserPlaceholder = props => (
  <Container {...props}>
    <User name="user" size={props.size / 2.5} solid />
  </Container>
);

export default UserPlaceholder;
