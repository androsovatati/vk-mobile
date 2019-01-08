import React from "react";
import Svg, { G, Path } from "react-native-svg";

const LiveIcon = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h24v24H0z" />
      <Path
        d="M12 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5zm0-2a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zm0-2a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13zm0-2a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0-2a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
        fill={props.color}
      />
    </G>
  </Svg>
);

export default LiveIcon;
