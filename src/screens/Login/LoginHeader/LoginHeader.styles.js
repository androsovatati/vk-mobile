import styled, { css } from "styled-components";

export const Container = styled.View`
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Logo = styled.View``;

export const LogoutButton = styled.TouchableOpacity`
  position: absolute;
  right: 0;

  ${props =>
    props.disabled &&
    css`
      opacity: 0.4;
    `}
`;

export const LogoutButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
