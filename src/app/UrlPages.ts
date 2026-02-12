import { lazy } from "react";
import type { AppRoute } from "../app/routes";

export const UrlPages: AppRoute[] = [
  {
    path: "/",
    component: lazy(() => import("../pages/Home/Home")),
  },
   {
    path: "/privacy-policy",
    component: lazy(() => import("../pages/PrivacyPolicy/PrivacyPolicy")),
  },
  {
    path: "/about-us",
    component: lazy(() => import("../pages/AboutUs/AboutMoveCo/AboutUs")),
  },
  {
    path: "/our-insurance",
    component: lazy(() => import("../pages/AboutUs/OurInsurance/OurInsurance")),
  },
  {
    path: "/our-standard",
    component: lazy(() => import("../pages/AboutUs/OurStandards/OurStandard")),
  },
   {
    path: "/AssociateCodeofConduct",
    component: lazy(
      () => import("../pages/AboutUs/AssociateCodeofConduct/AssociateCodeofConduct"),
    ),
  },
  {
    path: "/supported-charity",
    component: lazy(() => import("../pages/AboutUs/SupportedCharity/SupportedCharity")),
  },
  {
    path: "/TheAshleyWatrousFoundation",
    component: lazy(
      () =>
        import("../pages/AboutUs/SupportedCharity/TheAshleyWatrousFoundation/TheAshleyWatrousFoundation"),
    ),
  },
  {
    path: "/SensResearchFoundation",
    component: lazy(
      () => import("../pages/AboutUs/SupportedCharity/SensResearchFoundation/SensResearchFoundation"),
    ),
  },
  {
    path: "/ScottishRiteHospital",
    component: lazy(
      () => import("../pages/AboutUs/SupportedCharity/ScottishRiteHospital/ScottishRiteHospital"),
    ),
  },
  {
    path: "/job-application",
    component: lazy(() => import("../pages/AboutUs/JobApplication/JobApplication")),
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
    path: "/AddTestimonial",
    component: lazy(() => import("../pages/Resources/AddTestimonial/AddTestimonial")),
  },
  {
    path: "/client-testimonial",
    component: lazy(
      () => import("../pages/Resources/ClientTestimonial/ClientTestimonial"),
    ),
  },
  {
    path: "/video-review",
    component: lazy(() => import("../pages/Resources/VideoReview/VideoReview")),
  },
  {
    path: "/product",
    component: lazy(() => import("../pages/Product/Product")),
  },
  {
    path: "/cart",
    component: lazy(() => import("../pages/Product/Cart")),
  },
  {
    path: "/InHomeMoveEstimate",
    component: lazy(
      () => import("../pages/InHomeMoveEstimate/InHomeMoveEstimate"),
    ),
  },
  {
    path: "/online-estimate",
    component: lazy(
      () =>
        import("../pages/services/InstantOnlineEstimate/InstantOnlineEstimate"),
    ),
  },
  {
    path: "/move-information",
    component: lazy(
      () => import("../pages/services/InstantOnlineEstimate/MoveInformation"),
    ),
  },
  {
    path: "/inventry",
    component: lazy(
      () => import("../pages/services/InstantOnlineEstimate/Inventry"),
    ),
  },
  {
    path: "/contact-us",
    component: lazy(() => import("../pages/ContactUs/ContactUs")),
  },
];
