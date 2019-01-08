import React from "react";
import Svg, { G, Path } from "react-native-svg";

const MenuIcon = props => (
  <Svg width={28} height={28} viewBox="0 0 28 28" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h28v28H0z" />
      <Path
        d="M5.25 6.5h17.5a1.25 1.25 0 0 1 0 2.5H5.25a1.25 1.25 0 1 1 0-2.5zm0 6.5h17.5a1.25 1.25 0 0 1 0 2.5H5.25a1.25 1.25 0 0 1 0-2.5zm0 6.5h17.5a1.25 1.25 0 0 1 0 2.5H5.25a1.25 1.25 0 0 1 0-2.5z"
        fill={props.color}
      />
    </G>
  </Svg>
);

export default MenuIcon;
