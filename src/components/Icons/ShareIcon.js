import React from "react";
import Svg, { G, Path } from "react-native-svg";

const ShareIcon = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h24v24H0z" />
      <Path
        d="M13 8.75V4.581a.5.5 0 0 1 .824-.38l8.728 7.418a.5.5 0 0 1 0 .762L13.824 19.8a.5.5 0 0 1-.824-.381V15.25c-5.346 0-9.14 1.145-11.38 3.435a.25.25 0 0 1-.422-.232C2.703 11.984 6.637 8.75 13 8.75zm0 0V4.581a.5.5 0 0 1 .824-.38l8.728 7.418a.5.5 0 0 1 0 .762L13.824 19.8a.5.5 0 0 1-.824-.381V15.25c-5.346 0-9.14 1.145-11.38 3.435a.25.25 0 0 1-.422-.232C2.703 11.984 6.637 8.75 13 8.75z"
        fill={props.color}
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default ShareIcon;
