import React from "react";
import Svg, { G, Path } from "react-native-svg";

const MessagesIcon = props => (
  <Svg width={28} height={28} viewBox="0 0 28 28" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h28v28H0z" />
      <Path
        d="M3.952 25.001a1.434 1.434 0 0 1-1.363-2.023c.911-2.015 1.413-3.498 1.514-4.379C3.062 17.073 2.5 15.323 2.5 13.5c0-5.56 5.18-10 11.5-10s11.5 4.44 11.5 10-5.18 10-11.5 10c-1.355 0-2.678-.204-3.924-.597-1.402 1.306-3.458 1.994-6.124 2.098zm5.085-3.9a1 1 0 0 1 1.111-.287c1.202.45 2.506.686 3.852.686 5.278 0 9.5-3.619 9.5-8s-4.222-8-9.5-8-9.5 3.619-9.5 8c0 1.508.497 2.955 1.426 4.213a1 1 0 0 1 .196.598c-.004 1.047-.45 2.567-1.33 4.627 1.987-.208 3.388-.831 4.245-1.837z"
        fill={props.color}
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default MessagesIcon;
