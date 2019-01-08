import styled from "styled-components";
import { LIGHT_BLUE } from "../../constants/colors";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: ${props => props.size / 2};
  background-color: ${LIGHT_BLUE};
`;

export const User = styled.View`
  width: ${props => props.iconSize};
  height: ${props => props.iconSize};
  opacity: 0.3;
`;
