import React from "react";
import { SvgXml } from "react-native-svg";

const LeagueTabIcon = ({ color = "#6231AD", size = 24 }) => {
  return (
    <SvgXml
      xml={`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="1" y="7" width="5" height="13" rx="1" fill="${color}"/>
        <rect x="9" y="3" width="5" height="17" rx="1" fill="${color}"/>
        <rect x="17" y="11" width="5" height="9" rx="1" fill="${color}"/>
      </svg>
      `}
      width={size}
      height={size}
    />
  );
};

export default LeagueTabIcon;
