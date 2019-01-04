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

export const ErrorContainer = styled.View`
  align-items: center;
  margin-top: -50px;
  margin-bottom: 50px;
`;

export const ErrorMessage = styled.Text`
  margin-top: 10px;
  max-width: 200px;
  color: ${GRAY};
  text-align: center;
`;

export const ForgetPassword = styled.Text`
  margin-top: 20px;
  color: ${GRAY};
  text-align: center;
`;
