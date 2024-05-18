import React from "react";
import { useLocation } from "react-router-dom";

export const dontNeedMTScreens = ["/", "/view-all/freelancer", "/projects"];

const DynamicMarginTop = () => {
  const location = useLocation();

  return (
    !dontNeedMTScreens.includes(location.pathname) && <div className="mt-24" />
  );
};

export default DynamicMarginTop;
