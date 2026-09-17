import { ROUTES } from "@/config/routes";

// Marks a nav item active for its own page and every page below it (e.g. Services for /services/greasing/).
export function isActivePath(pathname: string, href: string) {
  if (href === ROUTES.home) {
    return pathname === ROUTES.home;
  }
  const current = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return current.startsWith(href);
}
