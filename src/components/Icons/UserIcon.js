import React from "react";
import Svg, { G, Path } from "react-native-svg";

const UserIcon = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h24v24H0z" />
      <Path
        d="M16 8c0-2.21-1.79-4-4-4S8 5.79 8 8s1.79 4 4 4 4-1.79 4-4zM4 18v.995C4 19.55 4.45 20 5.005 20h13.99C19.55 20 20 19.55 20 18.995V18c0-3.5-5.33-4.5-8-4.5s-8 1-8 4.5z"
        fill={props.color}
      />
    </G>
  </Svg>
);

export default UserIcon;
