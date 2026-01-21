import { lazy } from "react";
import type { AppRoute } from "../app/routes";

export const UrlPages: AppRoute[] = [
  {
    path: "/",
    component: lazy(() => import("../pages/Home/Home")),
  },
  {
    path: "/about-us",
    component: lazy(() => import("../pages/AboutUs/AboutUs")),
  },
  {
    path: "/privacy-policy",
    component: lazy(() => import("../pages/PrivacyPolicy/PrivacyPolicy")),
  },
  {
    path: "/contact-us",
    component: lazy(() => import("../pages/ContactUs/ContactUs")),
  },
];
