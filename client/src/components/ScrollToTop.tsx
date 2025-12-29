import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // If the new location contains a hash (anchor), let the browser handle scrolling.
    if (location.includes("#")) return;

    // Scroll to top of the page when the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
