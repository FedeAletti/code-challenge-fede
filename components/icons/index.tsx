import { Svg, SvgProps, Path } from "react-native-svg"
import React from 'react';


interface SvgComponentProps extends SvgProps { }

export const FilledCheckIcon = (props: SvgProps) => (
  <Svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    {...props}
  >
    <Path
      fill="#00B47D"
      fillRule="evenodd"
      d="M8 15.2A7.2 7.2 0 1 0 8 .8a7.2 7.2 0 0 0 0 14.4Zm3.336-8.364a.9.9 0 1 0-1.272-1.272L7.1 8.527 5.936 7.364a.9.9 0 0 0-1.272 1.272l1.8 1.8a.9.9 0 0 0 1.272 0l3.6-3.6Z"
      clipRule="evenodd"
    />
  </Svg>
)

export const LocationIcon = (props: SvgProps) => (
  <Svg
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M3.5 0A3.497 3.497 0 0 0 0 3.5C0 6.125 3.5 10 3.5 10S7 6.125 7 3.5C7 1.565 5.435 0 3.5 0Zm0 4.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z"
    />
  </Svg>
)

export const ScheduledIcon = (props: SvgProps) => (
  <Svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <Path
      stroke="#00B47D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 5v3l2.25 2.25M14.75 8a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z"
    />
  </Svg>
)