import React from "react";
import Svg, { G, Path } from "react-native-svg";

const MoreHorizontalIcon = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M24 0H0v24h24z" />
      <Path
        d="M18 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-6 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-6 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
        fill={props.color}
      />
    </G>
  </Svg>
);

export default MoreHorizontalIcon;
