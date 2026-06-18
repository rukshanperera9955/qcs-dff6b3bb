import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets the window scroll position to the top on every route change so a
 * newly opened page always starts at the top instead of inheriting the
 * previous page's scroll position.
 *
 * Hash navigations (e.g. "/#contact") are skipped so the in-page anchor
 * scrolling handled in Index can take over.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
