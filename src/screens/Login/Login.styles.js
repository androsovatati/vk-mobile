import styled from "styled-components";
import { LIGHT_GRAY, GRAY } from "../../constants/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${LIGHT_GRAY};
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${GRAY};
`;

export const LoginForm = styled.KeyboardAvoidingView`
  flex-grow: 1;
  justify-content: center;
`;
