/**
 * GitHub Pages serves 404.html for unknown paths, which redirects to /?p=/requested/path.
 * Normalize the URL before React Router mounts.
 */
export function restoreSpaPathFromQuery(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  const params = new URLSearchParams(window.location.search);
  const redirectPath = params.get("p");
  if (!redirectPath) {
    return false;
  }

  const path = redirectPath.startsWith("/") ? redirectPath : `/${redirectPath}`;
  const encodedQuery = params.get("q");
  const search = encodedQuery
    ? `?${encodedQuery.replace(/~and~/g, "&")}`
    : "";

  window.history.replaceState(null, "", `${path}${search}${window.location.hash}`);
  return true;
}