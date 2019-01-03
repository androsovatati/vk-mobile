import React from "react";
import { Wrapper } from "./Header.styles";

export default Component => props => (
  <Wrapper>
    <Component {...props} />
  </Wrapper>
);
