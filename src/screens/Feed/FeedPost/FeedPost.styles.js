import styled, { css } from "styled-components";
import { BLUE, GRAY, LIGHT_GRAY } from "../../../constants/colors";

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  padding-top: 5px;
`;

export const Source = styled.View`
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const SourceInfo = styled.View`
  padding-left: 10px;
  justify-content: center;
`;

export const Name = styled.Text`
  color: ${BLUE};
  font-size: 14px;
`;
export const Date = styled.Text`
  color: ${GRAY};
  font-size: 12px;
`;

export const TextContent = styled.Text`
  margin: 0 10px;
  padding-bottom: 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${LIGHT_GRAY};
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
