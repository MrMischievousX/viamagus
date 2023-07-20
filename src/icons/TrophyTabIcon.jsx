import React from "react";
import { SvgXml } from "react-native-svg";

const TrophyTabIcon = ({ color = "#6231AD", size = 24 }) => {
  return (
    <SvgXml
      xml={`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M21.1667 5.33331H17.5556V3.94442C17.5556 3.48261 17.184 3.11108 16.7222 3.11108H7.27778C6.81597 3.11108 6.44444 3.48261 6.44444 3.94442V5.33331H2.83333C2.37153 5.33331 2 5.70483 2 6.16664V8.11108C2 9.35067 2.78125 10.625 4.14931 11.6076C5.24306 12.3958 6.57292 12.8958 7.96875 13.0555C9.05903 14.8646 10.3333 15.6111 10.3333 15.6111V18.1111H8.66667C7.44097 18.1111 6.44444 18.8298 6.44444 20.0555V20.4722C6.44444 20.7014 6.63194 20.8889 6.86111 20.8889H17.1389C17.3681 20.8889 17.5556 20.7014 17.5556 20.4722V20.0555C17.5556 18.8298 16.559 18.1111 15.3333 18.1111H13.6667V15.6111C13.6667 15.6111 14.941 14.8646 16.0313 13.0555C17.4306 12.8958 18.7604 12.3958 19.8507 11.6076C21.2153 10.625 22 9.35067 22 8.11108V6.16664C22 5.70483 21.6285 5.33331 21.1667 5.33331ZM5.44792 9.80553C4.60069 9.19442 4.22222 8.51386 4.22222 8.11108V7.55553H6.45139C6.48611 8.68747 6.65278 9.68053 6.89583 10.5486C6.37153 10.368 5.88194 10.118 5.44792 9.80553ZM19.7778 8.11108C19.7778 8.67011 19.1632 9.36456 18.5521 9.80553C18.1181 10.118 17.625 10.368 17.1007 10.5486C17.3438 9.68053 17.5104 8.68747 17.5451 7.55553H19.7778V8.11108Z" fill="${color}"/>
    </svg>
      `}
      width={size}
      height={size}
    />
  );
};

export default TrophyTabIcon;
