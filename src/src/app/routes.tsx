import type { JSX, LazyExoticComponent } from "react";

export type AppRoute = {
  path: string;
  component: LazyExoticComponent<() => JSX.Element>;
  protected?: boolean;
};
