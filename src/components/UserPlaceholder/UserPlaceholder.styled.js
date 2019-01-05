import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome5";
import { LIGHT_BLUE, DARK_BLUE } from "../../constants/colors";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: ${props => props.size / 2};
  background-color: ${LIGHT_BLUE};
`;

export const User = styled(Icon)`
  color: ${DARK_BLUE};
  opacity: 0.3;
`;
