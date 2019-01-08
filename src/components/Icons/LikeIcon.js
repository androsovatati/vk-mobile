import React from "react";
import Svg, { G, Path } from "react-native-svg";

const LikeIcon = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h24v24H0z" />
      <Path
        d="M16.737 3.1A6.163 6.163 0 0 1 22.9 9.263c0 3.42-1.368 5.131-7.116 9.602L13.166 20.9a1.9 1.9 0 0 1-2.332 0l-2.618-2.036C2.468 14.395 1.1 12.682 1.1 9.263A6.163 6.163 0 0 1 7.263 3.1C9.08 3.1 10.656 4.161 12 6.186 13.344 4.161 14.92 3.1 16.737 3.1z"
        fill={props.color}
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default LikeIcon;
