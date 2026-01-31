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
  {
    path: "/our-insurance",
    component: lazy(() => import("../pages/AboutUs/OurInsurance")),
  },
  {
    path: "/our-standard",
    component: lazy(() => import("../pages/AboutUs/OurStandard")),
  },
  {
    path: "/privacy-policy",
    component: lazy(() => import("../pages/PrivacyPolicy/PrivacyPolicy")),
  },
  {
    path: "/contact-us",
    component: lazy(() => import("../pages/ContactUs/ContactUs")),
  },
  {
    path: "/blog",
    component: lazy(() => import("../pages/Blog/Blog")),
  },
  {
    path: "professionalpackingservices",
    component: lazy(
      () =>
        import("../pages/services/ProfessionalPackingServices/ProfessionalPackingServices"),
    ),
  },
  {
    path: "storages",
    component: lazy(() => import("../pages/services/Storage/Storage")),
  },
  {
    path: "/client-testimonial",
    component: lazy(() => import("../pages/ClientTestimonial/ClientTestimonial")),
  },
  {
    path: "/video-review",
    component: lazy(() => import("../pages/VideoReview/VideoReview")),
  },
   {
    path: "/supported-charity",
    component: lazy(() => import("../pages/SupportedCharity/SupportedCharity")),
  },
  {
    path: "/TheAshleyWatrousFoundation",
    component: lazy(() => import("../pages/TheAshleyWatrousFoundation/TheAshleyWatrousFoundation")),
  },
  {
    path: "/SensResearchFoundation",
    component: lazy(() => import("../pages/SensResearchFoundation/SensResearchFoundation")),
  },
  {
    path: "/ScottishRiteHospital",
    component: lazy(() => import("../pages/ScottishRiteHospital/ScottishRiteHospital")),
  },
   {
    path: "/AssociateCodeofConduct",
    component: lazy(() => import("../pages/AssociateCodeofConduct/AssociateCodeofConduct")),
  },
];
