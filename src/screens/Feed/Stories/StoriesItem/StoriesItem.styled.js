import styled, { css } from "styled-components";
import { LIGHT_BLUE, BLUE, GRAY } from "../../../../constants/colors";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 100%;
  margin: 0 5px;
  overflow: hidden;
`;

export const ImageWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 68px;
  border-radius: 34px;
  background-color: white;

  ${props =>
    props.accent &&
    css`
      border: 2px solid ${BLUE};
    `}
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const ImagePlaceholder = styled.View`
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${LIGHT_BLUE};
`;

export const Text = styled.Text`
  margin-top: 2px;
  width: 60px;
  text-align: center;
  font-size: 12px;
  color: #67707a;
  ${props =>
    props.accent &&
    css`
      color: ${BLUE};
    `};
`;
