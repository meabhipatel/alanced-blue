import React from "react";
import { useLocation } from "react-router-dom";

const DynamicMarginTop = () => {
  const location = useLocation();

  const dontNeedMTScreens = ["/", "/view-all/freelancer", "/projects"];

  return (
    !dontNeedMTScreens.includes(location.pathname) && <div className="mt-24" />
  );
};

export default DynamicMarginTop;
