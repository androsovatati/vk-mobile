import React from "react";
import Svg, { G, Path } from "react-native-svg";

const SearchIcon = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h24v24H0z" />
      <Path
        d="M16.535 15.12l4.172 4.173a1 1 0 0 1-1.414 1.414l-4.172-4.172a7.25 7.25 0 1 1 1.414-1.414zM10.75 16a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5z"
        fill={props.color}
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default SearchIcon;
