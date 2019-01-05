import styled from "styled-components";
import { GRAY } from "../../constants/colors";

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center
  flex-grow: 0;
  margin-top: 10px;
  padding: 0 10px;
  height: 50px;
  background-color: white;
`;

export const AddPost = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  justify-content: center;
  padding-left: 10px;
`;

export const AddPostText = styled.Text`
  color: ${GRAY};
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 10px;
`;
