// src/components/ScrollToTopOnRoute.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnRoute = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" // 👑 INSTANT SCROLL (NO ANIMATION)
    });
  }, [pathname]);

  return null;
};

export default ScrollToTopOnRoute;
