import type { RouteNameType } from "../../../app/routeNames";

export interface NavLink {
  label: string;
  path: RouteNameType;
  items?: never;
}

export interface NavGroup {
  label: string;
  items: NavLink[];
  path?: never;
}

export type NavItem = NavLink | NavGroup;

export const isNavGroup = (item: NavItem): item is NavGroup =>
  "items" in item && !!item.items;
export const isNavLink = (item: NavItem): item is NavLink =>
  "path" in item && !!item.path;
