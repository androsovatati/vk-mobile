import React from "react";
import Svg, { G, Path } from "react-native-svg";

const CommentOutlineIcon = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h24v24H0z" />
      <Path
        d="M13.766 17.446a1.4 1.4 0 0 1 .922-.346H18.5c1.003 0 1.6-.597 1.6-1.6v-8c0-1.003-.597-1.6-1.6-1.6h-12c-1.003 0-1.6.597-1.6 1.6v8c0 1.003.597 1.6 1.6 1.6h2.499c.7.202.7.202.901.901v2.829l3.866-3.384zm-4.931 5.086C8.363 22.178 8.1 21.554 8.1 21v-2.1H6.5c-1.997 0-3.4-1.403-3.4-3.4v-8c0-1.997 1.403-3.4 3.4-3.4h12c1.997 0 3.4 1.403 3.4 3.4v8c0 1.997-1.403 3.4-3.4 3.4h-3.662l-3.725 3.26c-.732.718-1.589.89-2.278.372z"
        fill={props.color}
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default CommentOutlineIcon;
