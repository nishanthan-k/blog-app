import React, { useEffect, useState } from "react";

const useMediaBreakpoint = (resolution) => {
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (resolution === 'sm') {
      setMatches(windowInnerWidth <= 640);
    } else if (resolution === "md") {
      setMatches(windowInnerWidth >= 768);
    } else if (resolution === "lg") {
      setMatches(windowInnerWidth >= 1024);
    }
  }, [windowInnerWidth, resolution]);

  return matches;
};

export default useMediaBreakpoint;
