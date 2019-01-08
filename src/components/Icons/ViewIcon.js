import React from "react";
import Svg, { G, Path } from "react-native-svg";

const ViewIcon = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h24v24H0z" />
      <Path
        d="M12 19c-6 0-10-5.6-10-7 0-1.4 4-7 10-7s10 5.6 10 7c0 1.4-4 7-10 7zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm.001-2.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
        fill={props.color}
      />
    </G>
  </Svg>
);

export default ViewIcon;
