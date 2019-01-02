import styled from "styled-components";
import { RNCamera } from "react-native-camera";

export const Container = styled.View`
  position: relative;
  flex: 1;
  background-color: black;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
`;
