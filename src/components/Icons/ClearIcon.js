import React from "react";
import Svg, { Path } from "react-native-svg";

const ClearIcon = props => (
  <Svg width={16} height={16} viewBox="0 0 16 16" {...props}>
    <Path
      d="M6.729 8.002L4.263 10.47a.9.9 0 1 0 1.273 1.273L8 9.275l2.465 2.468a.9.9 0 1 0 1.272-1.273L9.273 8.002l2.465-2.469a.9.9 0 1 0-1.272-1.273L8 6.728 5.536 4.26a.9.9 0 0 0-1.273 1.273l2.466 2.469zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
      fill={props.color}
      fillRule="evenodd"
    />
  </Svg>
);

export default ClearIcon;
