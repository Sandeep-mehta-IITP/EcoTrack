import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Jab bhi pathname change hoga, page top par scroll karega

  return null;
};

export default ScrollToTop;
// This component will be used in project/src/App.jsx to scroll to the top of the page whenever the user navigates to a new page.