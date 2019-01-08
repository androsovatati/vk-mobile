import React from "react";
import Svg, { G, Path } from "react-native-svg";

const ShareOutlineIcon = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h24v24H0z" />
      <Path
        d="M.322 18.25C1.848 11.688 5.832 8.174 12.1 7.87V4.402a1.317 1.317 0 0 1 2.17-1.004l8.939 7.598a1.317 1.317 0 0 1 0 2.008l-8.939 7.598a1.317 1.317 0 0 1-2.17-1.004V16.16c-4.647.12-7.916 1.19-9.836 3.153A1.15 1.15 0 0 1 .322 18.25zM13 9.65c-5.262 0-8.669 2.308-10.358 7.055C5.096 15.124 8.555 14.35 13 14.35h.9v4.204L21.61 12 13.9 5.446V9.65H13z"
        fill={props.color}
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default ShareOutlineIcon;
