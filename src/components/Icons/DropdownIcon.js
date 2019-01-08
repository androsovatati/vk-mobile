import React from "react";
import Svg, { G, Path } from "react-native-svg";

const DropdownIcon = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h24v24H0z" />
      <Path
        d="M12 14.198L6.64 9.732a1 1 0 1 0-1.28 1.536l6 5a1 1 0 0 0 1.28 0l6-5a1 1 0 1 0-1.28-1.536L12 14.198z"
        fill={props.color}
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default DropdownIcon;
