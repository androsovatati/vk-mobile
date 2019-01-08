import styled, { css } from "styled-components";
import { GRAY, RED } from "../../constants/colors";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Count = styled.Text`
  margin-left: 5px;
  color: ${GRAY};

  ${props =>
    props.active &&
    css`
      color: ${RED};
    `}
`;
