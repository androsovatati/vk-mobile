import React from "react";
import Svg, { G, Path } from "react-native-svg";

const LikeOutlineIcon = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h24v24H0z" />
      <Path
        d="M16.737 3.1A6.163 6.163 0 0 1 22.9 9.263c0 3.42-1.368 5.131-7.116 9.602L13.166 20.9a1.9 1.9 0 0 1-2.332 0l-2.618-2.036C2.468 14.395 1.1 12.682 1.1 9.263A6.163 6.163 0 0 1 7.263 3.1c1.783 0 3.37.818 4.737 2.395C13.367 3.918 14.954 3.1 16.737 3.1zM7.263 4.9A4.363 4.363 0 0 0 2.9 9.263c0 2.67 1.091 4.036 6.421 8.181l2.618 2.036a.1.1 0 0 0 .122 0l2.618-2.036c5.33-4.145 6.421-5.511 6.421-8.18A4.363 4.363 0 0 0 16.737 4.9c-1.466 0-2.785.826-3.997 2.578L12 8.548l-.74-1.07C10.048 5.726 8.729 4.9 7.263 4.9z"
        fill={props.color}
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default LikeOutlineIcon;
