import styled, { css } from "styled-components";

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const Source = styled.View`
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const SourceInfo = styled.View``;

export const Name = styled.Text``;
export const Date = styled.Text``;

export const TextContent = styled.Text`
  padding: 0 10px 10px 10px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  height: 30px;
  padding: 10px;
  padding-bottom: 0;
`;

export const FooterItem = styled.View`
  min-width: 70px;
  padding-right: 15px;

  ${props =>
    props.last &&
    css`
      margin-right: 0;
      margin-left: auto;
      min-width: auto;
      padding-right: 0;
    `}
`;
