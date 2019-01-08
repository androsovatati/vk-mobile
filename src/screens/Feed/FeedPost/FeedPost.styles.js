import styled, { css } from "styled-components";

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
