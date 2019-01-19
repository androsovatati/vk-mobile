import styled from "styled-components";
import { BLUE } from "../../../constants/colors";

export const Button = styled.TouchableOpacity`
  position: absolute;
  top: 70px;
  left: 50%;
  width: 200px;
  height: 40px;
  padding: 0 20px;
  border-radius: 20px;
  background-color: ${BLUE};
  transform: translateX(-100px);
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Text = styled.Text`
  padding-left: 10px;
  color: white;
`;
