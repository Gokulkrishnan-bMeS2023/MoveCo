import { lazy } from "react";
import type { AppRoute } from "../app/routes";

export const UrlPages: AppRoute[] = [
  { path: "/", component: lazy(() => import("../pages/Home/Home")) },

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
    path: "/associate-code-of-conduct",
    component: lazy(
      () =>
        import("../pages/AboutUs/AssociateCodeofConduct/AssociateCodeofConduct"),
    ),
  },

  {
    path: "/supported-charity",
    component: lazy(
      () => import("../pages/AboutUs/SupportedCharity/SupportedCharity"),
    ),
  },

  {
    path: "/the-ashley-watrous-foundation",
    component: lazy(
      () =>
        import("../pages/AboutUs/SupportedCharity/TheAshleyWatrousFoundation/TheAshleyWatrousFoundation"),
    ),
  },

  {
    path: "/sens-research-foundation",
    component: lazy(
      () =>
        import("../pages/AboutUs/SupportedCharity/SensResearchFoundation/SensResearchFoundation"),
    ),
  },

  {
    path: "/scottish-rite-hospital",
    component: lazy(
      () =>
        import("../pages/AboutUs/SupportedCharity/ScottishRiteHospital/ScottishRiteHospital"),
    ),
  },

  {
    path: "/job-application",
    component: lazy(
      () => import("../pages/AboutUs/JobApplication/JobApplication"),
    ),
  },

  {
    path: "/professional-packing-services",
    component: lazy(
      () =>
        import("../pages/services/ProfessionalPackingServices/ProfessionalPackingServices"),
    ),
  },

  {
    path: "/storage",
    component: lazy(() => import("../pages/services/Storage/Storage")),
  },

  {
    path: "/add-testimonial",
    component: lazy(
      () => import("../pages/Resources/AddTestimonial/AddTestimonial"),
    ),
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
    component: lazy(
      () => import("../pages/services/MovingPackingSupplies/Product"),
    ),
  },

  {
    path: "/cart",
    component: lazy(
      () => import("../pages/services/MovingPackingSupplies/Cart"),
    ),
  },

  {
    path: "/in-home-move-estimate",
    component: lazy(
      () => import("../pages/services/InHomeMoveEstimate/InHomeMoveEstimate"),
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
    path: "/inventory",
    component: lazy(
      () => import("../pages/services/InstantOnlineEstimate/Inventory"),
    ),
  },

  {
    path: "/contact-us",
    component: lazy(() => import("../pages/ContactUs/ContactUs")),
  },
];
