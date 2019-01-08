import React from "react";
import Svg, { Path } from "react-native-svg";

const GalleryIcon = props => (
  <Svg width={20} height={20} viewBox="0 0 384 384" {...props}>
    <Path
      fill={props.color}
      d="M336 0H48C21.527 0 0 21.527 0 48v288c0 26.473 21.527 48 48 48h288c26.473 0 48-21.527 48-48V48c0-26.473-21.527-48-48-48zM48 32h288c8.824 0 16 7.176 16 16v113.375l-52.688-52.688c-6.25-6.246-16.375-6.246-22.625 0L164 221.375l-40.688-40.688c-6.25-6.246-16.374-6.246-22.624 0L32 249.375V48c0-8.824 7.176-16 16-16zm288 320H48c-8.824 0-16-7.176-16-16v-41.375l80-80 92.688 92.68C207.815 310.44 211.901 312 216 312s8.184-1.559 11.313-4.688c6.246-6.25 6.246-16.375 0-22.625L186.625 244 288 142.633l64 64V336c0 8.824-7.176 16-16 16zm0 0"
    />
    <Path
      fill={props.color}
      d="M128 96c0 17.672-14.328 32-32 32s-32-14.328-32-32 14.328-32 32-32 32 14.328 32 32zm0 0"
    />
  </Svg>
);

export default GalleryIcon;
