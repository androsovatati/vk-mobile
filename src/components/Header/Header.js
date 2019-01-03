import React from "react";
import { Wrapper, Header } from "./Header.styles";

export default Component => props => (
  <Wrapper>
    <Header>
      <Component {...props} />
    </Header>
  </Wrapper>
);
