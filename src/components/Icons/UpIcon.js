import React from "react";
import Svg, { G, Path } from "react-native-svg";

const UpIcon = props => (
  <Svg width="16" height="16" viewBox="0 0 16 16" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h16v16H0z" />
      <Path
        d="M7 5.414L4.207 8.207a1 1 0 0 1-1.414-1.414l4.5-4.5a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 1 1-1.414 1.414L9 5.414V13.5a1 1 0 0 1-2 0V5.414z"
        fill={props.color}
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default UpIcon;
