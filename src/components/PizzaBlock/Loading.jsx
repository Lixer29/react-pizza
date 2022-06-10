import React from 'react';
import ContentLoader from "react-content-loader"

function Loading() {
  return (
        <ContentLoader 
        speed={2}
        width={300
        }
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="196" y="147" rx="0" ry="0" width="1" height="0" /> 
        <rect x="49" y="144" rx="0" ry="0" width="1" height="1" /> 
        <circle cx="140" cy="140" r="140" /> 
        <rect x="0" y="291" rx="3" ry="3" width="280" height="30" /> 
        <rect x="188" y="312" rx="0" ry="0" width="2" height="0" /> 
        <rect x="0" y="330" rx="6" ry="6" width="276" height="84" /> 
        <rect x="72" y="378" rx="0" ry="0" width="6" height="1" /> 
        <rect x="-1" y="422" rx="0" ry="0" width="81" height="35" /> 
        <rect x="151" y="423" rx="22" ry="22" width="123" height="36" />
      </ContentLoader>
      );
}

export default Loading;
